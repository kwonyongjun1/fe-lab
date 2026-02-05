"use client";

import Image from "next/image";

type ImageSample = {
  id: string;
  title: string;
  url: string;
};

type HorizontalSectionProps = {
  cardClasses: string;
  imageSamples: ImageSample[];
};

export default function HorizontalSection({
  cardClasses,
  imageSamples,
}: HorizontalSectionProps) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-2">
      {[...imageSamples, ...imageSamples, ...imageSamples].map((image, index) => (
        <div key={`${image.id}-${index}`} className={`${cardClasses} min-w-[220px]`}>
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src={image.url}
              alt={image.title}
              fill
              sizes="220px"
              className="object-cover"
            />
          </div>
          <div className="px-4 py-3">
            <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {image.title}
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">
              캐러셀 느낌
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

