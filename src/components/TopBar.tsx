import Link from "next/link";
import { Bell, Globe2 } from "lucide-react";

export function TopBar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-white/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold text-ink">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white">
            C
          </span>
          <span className="text-lg">Co-found.uz</span>
        </Link>
        <div className="flex items-center gap-3 text-sm">
          <button className="rounded-full border border-ink/10 bg-white px-3 py-1 text-ink">
            uz-Lat
          </button>
          <button className="rounded-full border border-ink/10 bg-white px-3 py-1 text-ink">
            uz-Cyrl
          </button>
          <Link
            href="/notifications"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-white text-ink"
            aria-label="Bildirishnomalar"
          >
            <Bell size={18} />
          </Link>
          <button
            className="hidden items-center gap-2 rounded-full border border-ink/10 bg-white px-3 py-2 text-ink md:flex"
            aria-label="Til sozlamalari"
          >
            <Globe2 size={16} />
            Til
          </button>
        </div>
      </div>
    </header>
  );
}
