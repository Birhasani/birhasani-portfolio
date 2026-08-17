import { expect, test, type Page } from "@playwright/test";

const projectRoutes = [
  "/work/telusur-mahija",
  "/work/widya-robotics",
  "/work/becatur",
  "/work/avalon-ai-matahari",
  "/work/its-website-team",
  "/work/balimask3d",
] as const;

const pageRoutes = ["/", "/work", "/about", "/contact", ...projectRoutes] as const;

function collectBrowserErrors(page: Page) {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(`console: ${message.text()}`);
  });
  page.on("pageerror", (error) => errors.push(`pageerror: ${error.message}`));
  return errors;
}

test("home page loads and primary navigation works", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Birhasani Raka Abiansyah/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Designing clear digital experiences");

  const primaryNavigation = page.getByRole("navigation", { name: "Primary navigation" });
  await primaryNavigation.getByRole("link", { name: "Work" }).click();
  await expect(page).toHaveURL(/\/work$/);
  await primaryNavigation.getByRole("link", { name: "About" }).click();
  await expect(page).toHaveURL(/\/about$/);
  await primaryNavigation.getByRole("link", { name: "Contact" }).click();
  await expect(page).toHaveURL(/\/contact$/);
});

test("all six project routes load", async ({ page }) => {
  for (const route of projectRoutes) {
    const response = await page.goto(route);
    expect(response?.ok(), `${route} should return a successful response`).toBeTruthy();
    await expect(page.locator("main h1")).toHaveCount(1);
  }
});

test("resume links target an existing PDF", async ({ page, request }) => {
  await page.goto("/");
  const resumeLink = page.getByRole("link", { name: /Download Resume/i }).first();
  const href = await resumeLink.getAttribute("href");
  expect(href).toMatch(/^\/resume\/.+\.pdf$/i);

  const response = await request.get(href!);
  expect(response.ok()).toBeTruthy();
  expect(response.headers()["content-type"]).toContain("application/pdf");
  expect((await response.body()).byteLength).toBeGreaterThan(0);
});

test("contact methods are present", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.getByRole("link", { name: "Email me" })).toHaveAttribute("href", /^mailto:/);
  await expect(page.getByRole("link", { name: /LinkedIn Professional profile/ })).toHaveAttribute("href", /^https:\/\/linkedin\.com\//);
  await expect(page.getByRole("link", { name: /GitHub Selected code/ })).toHaveAttribute("href", /^https:\/\/github\.com\//);
  await expect(page.getByRole("button", { name: /Copy email/i })).toBeVisible();
});

test("mobile navigation manages and contains focus", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const trigger = page.getByRole("button", { name: "Open navigation menu" });
  await trigger.focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("button", { name: "Close navigation menu" })).toHaveAttribute("aria-expanded", "true");

  const mobileNavigation = page.getByRole("navigation", { name: "Mobile navigation" });
  const firstLink = mobileNavigation.getByRole("link").first();
  const lastLink = mobileNavigation.getByRole("link").last();
  const closeButton = page.getByRole("button", { name: "Close navigation menu" });
  await expect(firstLink).toBeFocused();

  await firstLink.press("Shift+Tab");
  await expect(closeButton).toBeFocused();
  await closeButton.press("Shift+Tab");
  await expect(lastLink).toBeFocused();
  await lastLink.press("Tab");
  await expect(closeButton).toBeFocused();

  await page.keyboard.press("Escape");
  await expect(trigger).toBeFocused();
  await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeHidden();
});

test("every page has one h1, no mobile overflow, and no browser errors", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  const browserErrors = collectBrowserErrors(page);

  for (const route of pageRoutes) {
    await page.goto(route);
    await expect(page.locator("main h1"), `${route} should have one primary heading`).toHaveCount(1);
    const dimensions = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }));
    expect(dimensions.scrollWidth, `${route} should not overflow horizontally`).toBeLessThanOrEqual(dimensions.clientWidth);
  }

  expect(browserErrors).toEqual([]);
});

test("main controls support keyboard navigation and activation", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();

  const workLink = page.getByRole("link", { name: "View Selected Work" });
  await workLink.focus();
  await page.keyboard.press("Enter");
  await expect(page).toHaveURL(/\/#featured-work$/);
  await expect(page.locator("#featured-work")).toBeInViewport();

  await page.goto("/contact");
  const copyButton = page.getByRole("button", { name: /Copy email/i });
  await copyButton.focus();
  await expect(copyButton).toBeFocused();
});
