"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type BannerSectionProps = {
  cardClasses: string;
  bannerSamples: string[];
};

export default function BannerSection({
  cardClasses,
  bannerSamples,
}: BannerSectionProps) {
  const [index, setIndex] = useState(0);
  const total = bannerSamples.length;

  const slides = useMemo(
    () =>
      bannerSamples.map((url, idx) => ({
        id: `banner-${idx}`,
        url,
      })),
    [bannerSamples]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 3500);
    return () => clearInterval(timer);
  }, [total]);

  return (
    <div className={`${cardClasses} relative overflow-hidden`}>
      <div className="relative aspect-16/6 w-full">
        <Image
          src={slides[index].url}
          alt={`배너 ${index + 1}`}
          fill
          sizes="(max-width: 1024px) 100vw, 1200px"
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-black/40 px-4 py-2 text-xs text-white">
        <span>
          배너 {index + 1} / {total}
        </span>
        <div className="flex gap-2">
          <button
            className="rounded-full bg-white/20 px-2 py-1 text-xs hover:bg-white/30"
            onClick={() => setIndex((prev) => (prev - 1 + total) % total)}
            type="button"
          >
            이전
          </button>
          <button
            className="rounded-full bg-white/20 px-2 py-1 text-xs hover:bg-white/30"
            onClick={() => setIndex((prev) => (prev + 1) % total)}
            type="button"
          >
            다음
          </button>
        </div>
      </div>
    </div>
  );
}

