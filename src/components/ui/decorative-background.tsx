import { cn } from "@/lib/cn";

export function DecorativeBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
      aria-hidden="true"
    >
      <span className="absolute -right-24 top-16 size-72 rounded-full bg-soft-blue/70 blur-2xl" />
      <span className="absolute -left-24 top-[28rem] size-64 rounded-full bg-soft-orange/75 blur-2xl" />
      <span className="dot-grid absolute right-6 top-28 h-28 w-28 opacity-55 sm:right-12" />
      <span className="absolute right-[14%] top-[34rem] h-px w-28 rotate-[-18deg] bg-blue/45" />
      <span className="absolute -right-16 bottom-20 size-40 rotate-12 rounded-[2.5rem] border border-orange/20" />
    </div>
  );
}
