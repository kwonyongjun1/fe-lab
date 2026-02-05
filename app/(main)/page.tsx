import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
        홈
      </h1>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        로그인 페이지로 이동하려면 아래 링크를 눌러주세요.
      </p>
      <Link
        className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
        href="/login"
      >
        로그인 하러가기
      </Link>
    </div>
  );
}

