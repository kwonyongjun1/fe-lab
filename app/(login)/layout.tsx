type LoginLayoutProps = {
    children: React.ReactNode;
};

export default function LoginLayout({ children }: LoginLayoutProps) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-6 bg-white px-6 py-32 text-center dark:bg-black sm:items-start sm:text-left">
                {children}
            </main>
        </div>
    );
}