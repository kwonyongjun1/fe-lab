type PanelProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Panel({ children, className = "" }: PanelProps) {
  return (
    <main
      className={`flex min-h-screen w-full flex-col items-center gap-6 bg-white px-12 text-center dark:bg-black sm:items-start sm:text-left ${className}`.trim()}
    >
      {children}
    </main>
  );
}

