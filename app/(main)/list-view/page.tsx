"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const imageSamples = [
    {
        id: "chem-01",
        title: "플라스크 실험",
        url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop",
    },
    {
        id: "chem-02",
        title: "야간 연구실",
        url: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1200&auto=format&fit=crop",
    },
    {
        id: "chem-03",
        title: "달리기",
        url: "https://images.unsplash.com/photo-1470468969717-61d5d54fd036?q=80&w=1200&auto=format&fit=crop",
    },
    {
        id: "chem-04",
        title: "실험 스케치",
        url: "https://images.unsplash.com/photo-1509223197845-458d87318791?q=80&w=1200&auto=format&fit=crop",
    },
    {
        id: "chem-05",
        title: "화분",
        url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
    },
    {
        id: "chem-06",
        title: "프로토타입",
        url: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    },
];

const cardClasses =
    "overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-black";

const bannerSamples = [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
];

function BannerSlider() {
    const [index, setIndex] = useState(0);
    const total = bannerSamples.length;

    const slides = useMemo(
        () =>
            bannerSamples.map((url, idx) => ({
                id: `banner-${idx}`,
                url,
            })),
        []
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
                <span>배너 {index + 1} / {total}</span>
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

export default function ListViewPage() {
    return (
        <div className="space-y-10 place-self-center">
            <header className="space-y-2">
                <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                    리스트
                </h1>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    리스트를 다양한 형식으로 보여줍니다.
                </p>
            </header>

            <div className="flex flex-col gap-3">
                <section className="space-y-4 max-w-7xl">
                    <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                        배너 슬라이더
                    </h2>
                    <BannerSlider />
                </section>

                <section className="space-y-4 max-w-7xl">
                    <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                        카드 그리드
                    </h2>
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
                </section>

                <section className="space-y-4 max-w-7xl">
                    <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                        세로 리스트 (썸네일)
                    </h2>
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
                </section>

                <section className="space-y-4 max-w-7xl">
                    <h2 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                        수평 스크롤
                    </h2>
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
                </section>
            </div>
        </div>
    );
}