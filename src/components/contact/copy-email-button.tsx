"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

import { buttonVariants } from "@/components/ui/button";

export function CopyEmailButton({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
  }

  return <div><button className={buttonVariants({ variant: "secondary", size: "lg" })} type="button" onClick={copyEmail}>{status === "copied" ? <Check className="size-4" aria-hidden="true" /> : <Copy className="size-4" aria-hidden="true" />}{status === "copied" ? "Email copied" : "Copy email"}</button><p className="sr-only" role="status" aria-live="polite">{status === "copied" ? `${email} copied to clipboard.` : status === "error" ? `Email could not be copied. The address is ${email}.` : ""}</p></div>;
}
