"use client";

import Image from "next/image";

type ImageSample = {
  id: string;
  title: string;
  url: string;
};

type ListSectionProps = {
  cardClasses: string;
  imageSamples: ImageSample[];
};

export default function ListSection({
  cardClasses,
  imageSamples,
}: ListSectionProps) {
  return (
    <div className="space-y-3">
      {imageSamples.map((image) => (
        <div key={image.id} className={`${cardClasses} flex gap-4 p-3`}>
          <div className="relative h-20 w-28 overflow-hidden rounded-lg">
            <Image
              src={image.url}
              alt={image.title}
              fill
              sizes="112px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col justify-center">
            <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {image.title}
            </div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">
              리스트형 썸네일
            </div>
          </div>
          <span className="self-center rounded-full bg-zinc-100 px-2 py-1 text-xs text-zinc-600 dark:bg-zinc-900 dark:text-zinc-300">
            4:3
          </span>
        </div>
      ))}
    </div>
  );
}

