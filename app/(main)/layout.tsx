import Link from "next/link";
import PageShell from "@/shared/ui/page-shell";
import Panel from "@/shared/ui/panel";

type MainLayoutProps = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <PageShell>
      <Panel>
        <header className="flex w-full items-center justify-between gap-4 py-4">
          <div className="flex items-center gap-3">
            <div className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              FE Lab
            </div>
          </div>
          <nav className="flex items-center gap-4 text-sm font-medium text-zinc-600 dark:text-zinc-300">
            <Link className="hover:text-zinc-900 dark:hover:text-white" href="/">
              Home
            </Link>
            <Link
              className="hover:text-zinc-900 dark:hover:text-white"
              href="/login"
            >
              Login
            </Link>
            <Link
              className="hover:text-zinc-900 dark:hover:text-white"
              href="/list-view"
            >
              ListView
            </Link>
          </nav>
        </header>
        <div className="w-full">{children}</div>
      </Panel>
    </PageShell>
  );
}

