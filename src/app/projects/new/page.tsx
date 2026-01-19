import { BottomNav } from "@/components/BottomNav";
import { SectionHeader } from "@/components/SectionHeader";
import { TopBar } from "@/components/TopBar";

export default function NewProjectPage() {
  return (
    <div className="min-h-screen bg-cloud">
      <TopBar />
      <main className="mx-auto max-w-3xl space-y-6 px-4 pb-24 pt-8">
        <SectionHeader
          title="Yangi muammo"
          description="Qisqa, aniq va tushunarli yozing — yechimchilar tezroq javob beradi."
        />
        <form className="space-y-5 rounded-3xl border border-white/60 bg-white p-6 shadow-soft">
          <label className="block text-sm font-medium text-ink">
            Sarlavha
            <input
              type="text"
              placeholder="Masalan, Chilonzorda Lada ustasi kerak"
              className="mt-2 w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm"
            />
          </label>
          <label className="block text-sm font-medium text-ink">
            Tavsif
            <textarea
              placeholder="Muammoingizni 3-5 jumlada tushuntiring..."
              className="mt-2 w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm"
              rows={5}
            />
          </label>
          <label className="block text-sm font-medium text-ink">
            Bounty (0 - 100k so'm)
            <input type="range" min={0} max={100000} className="mt-2 w-full" />
          </label>
          <label className="block text-sm font-medium text-ink">
            Taglar
            <input
              type="text"
              placeholder="#Toshkent #Biznes"
              className="mt-2 w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm"
            />
          </label>
          <label className="block text-sm font-medium text-ink">
            Suratlar
            <input
              type="file"
              className="mt-2 w-full rounded-2xl border border-ink/10 bg-white px-4 py-3 text-sm"
            />
          </label>
          <button className="w-full rounded-full bg-ink py-3 text-sm font-semibold text-white">
            Loyihani yuborish
          </button>
        </form>
      </main>
      <BottomNav />
    </div>
  );
}
