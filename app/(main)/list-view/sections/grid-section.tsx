"use client";

import Image from "next/image";

type ImageSample = {
  id: string;
  title: string;
  url: string;
};

type GridSectionProps = {
  cardClasses: string;
  imageSamples: ImageSample[];
};

export default function GridSection({
  cardClasses,
  imageSamples,
}: GridSectionProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {imageSamples.map((image) => (
        <article key={image.id} className={cardClasses}>
          <div className="relative aspect-4/3 w-full overflow-hidden">
            <Image
              src={image.url}
              alt={image.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="px-4 py-3">
            <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {image.title}
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">
              Grid 카드 레이아웃
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

