import { BottomNav } from "@/components/BottomNav";
import { TopBar } from "@/components/TopBar";

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-cloud">
      <TopBar />
      <main className="mx-auto max-w-md space-y-6 px-4 pb-24 pt-8">
        <section className="rounded-3xl border border-white/60 bg-white p-6 shadow-soft">
          <h1 className="text-2xl font-semibold text-ink">Kirish / Ro'yxatdan o'tish</h1>
          <p className="mt-2 text-sm text-ink/60">Email yoki Google orqali tezkor kirish.</p>
          <form className="mt-6 space-y-4">
            <label className="block text-sm font-medium text-ink">
              Email
              <input
                type="email"
                placeholder="you@co-found.uz"
                className="mt-2 w-full rounded-2xl border border-ink/10 px-4 py-3 text-sm"
              />
            </label>
            <label className="block text-sm font-medium text-ink">
              Parol
              <input
                type="password"
                placeholder="********"
                className="mt-2 w-full rounded-2xl border border-ink/10 px-4 py-3 text-sm"
              />
            </label>
            <button className="w-full rounded-full bg-ink py-3 text-sm font-semibold text-white">
              Email bilan kirish
            </button>
            <button className="w-full rounded-full border border-ink/20 py-3 text-sm font-semibold text-ink">
              Google bilan davom etish
            </button>
          </form>
        </section>
      </main>
      <BottomNav />
    </div>
  );
}
