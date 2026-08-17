import { ImageIcon } from "lucide-react";

export function AssetPlaceholder({ filename, ratio = "16:9", alt }: { filename: string; ratio?: string; alt?: string }) {
  return (
    <div className={ratio === "1:1" ? "flex aspect-square w-full flex-col items-center justify-center gap-3 bg-[linear-gradient(135deg,var(--color-soft-blue),var(--color-soft-orange))] px-5 text-center" : "flex aspect-video w-full flex-col items-center justify-center gap-3 bg-[linear-gradient(135deg,var(--color-soft-blue),var(--color-soft-orange))] px-5 text-center"} role="img" aria-label={alt || `Asset placeholder for ${filename}, expected aspect ratio ${ratio}`}>
      <span className="grid size-10 place-items-center rounded-full border border-border bg-white/80 text-dark-blue"><ImageIcon aria-hidden="true" className="size-5" /></span>
      <span className="max-w-full break-all font-mono text-xs font-semibold text-primary-text">{filename}</span>
      <span className="rounded-full bg-white/75 px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-secondary-text">Expected {ratio}</span>
    </div>
  );
}
