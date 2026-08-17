import Image from "next/image";

import type { ProjectAsset } from "@/data/projects";

export function ProjectMedia({ asset, priority = false }: { asset: ProjectAsset; priority?: boolean }) {
  return (
    <div className="bg-muted-surface">
      <Image
        alt={asset.alt}
        className="h-auto w-full object-contain"
        height={asset.height}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 67vw, 960px"
        src={`/${asset.filename}`}
        width={asset.width}
      />
    </div>
  );
}
