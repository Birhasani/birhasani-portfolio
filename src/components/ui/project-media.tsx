import Image from "next/image";

import { AssetPlaceholder } from "@/components/ui/asset-placeholder";
import type { ProjectAsset } from "@/data/projects";

export function ProjectMedia({ asset }: { asset: ProjectAsset }) {
  if (asset.placeholder) {
    return (
      <AssetPlaceholder
        alt={asset.alt}
        filename={asset.filename}
        ratio={asset.ratio}
      />
    );
  }

  const isSquare = asset.ratio === "1:1";

  return (
    <div className={isSquare ? "relative aspect-square" : "relative aspect-video"}>
      <Image
        alt={asset.alt}
        className="object-cover"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 67vw, 960px"
        src={`/${asset.filename}`}
      />
    </div>
  );
}
