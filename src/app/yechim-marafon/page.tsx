import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";
import { MarathonCard } from "@/components/MarathonCard";
import { SectionHeader } from "@/components/SectionHeader";
import { TopBar } from "@/components/TopBar";
import { marathon } from "@/lib/mock-data";

export default function YechimMarafonPage() {
  return (
    <div className="min-h-screen bg-cloud">
      <TopBar />
      <main className="mx-auto max-w-5xl space-y-6 px-4 pb-24 pt-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-ink/70">
          <ArrowLeft size={16} /> Orqaga
        </Link>
        <SectionHeader
          title="Yechim Marathon"
          description="Haftalik chaqiruvlar bilan yechimchilar hamjamiyatini kuchaytiramiz."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {marathon.map((item) => (
            <MarathonCard key={item.title} {...item} />
          ))}
        </div>
        <section className="rounded-3xl border border-ink/10 bg-white p-6 shadow-soft">
          <h3 className="text-lg font-semibold text-ink">Qoidalar</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink/70">
            <li>• Har bir yechim uchun qisqa proof va natija yoziladi.</li>
            <li>• Top 3 yechimchilar Silk Road badge oladi.</li>
            <li>• Bounty va tiplar TON yoki Uzcard orqali yuboriladi.</li>
          </ul>
        </section>
      </main>
      <BottomNav />
    </div>
  );
}
