type PageShellProps = {
  children: React.ReactNode;
  className?: string;
};

export default function PageShell({ children, className = "" }: PageShellProps) {
  return (
    <div
      className={`flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black ${className}`.trim()}
    >
      {children}
    </div>
  );
}

