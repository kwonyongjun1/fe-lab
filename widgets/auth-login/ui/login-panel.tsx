import AuthButtons from "@/features/auth/ui/auth-buttons";

export default function LoginPanel() {
    return (
        <div>
            <div className="space-y-2">
                <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                    로그인
                </h1>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    카카오톡, Gmail, GitHub 계정으로 로그인할 수 있습니다.
                </p>
            </div>
            <AuthButtons />
        </div>
    );
}
