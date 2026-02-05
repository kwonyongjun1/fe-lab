"use client";

import { signIn } from "next-auth/react";

export default function AuthButtons() {
    return (
        <div className="flex flex-col gap-2 sm:flex-row">
            <button
                className="rounded-md bg-yellow-400 px-4 py-2 text-sm font-medium text-black hover:bg-yellow-300"
                onClick={() => signIn("kakao")}
            >
                카카오톡으로 로그인
            </button>
            <button
                className="rounded-md border border-zinc-200 px-4 py-2 text-sm text-zinc-900 hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-900"
                onClick={() => signIn("google")}
            >
                Gmail로 로그인
            </button>
            <button
                className="rounded-md border border-zinc-200 px-4 py-2 text-sm text-zinc-900 hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-900"
                onClick={() => signIn("github")}
            >
                GitHub로 로그인
            </button>
        </div>
    );
}

