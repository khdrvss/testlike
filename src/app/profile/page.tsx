import Image from "next/image";
import { BadgeCheck, MapPin, Star } from "lucide-react";
import { AvatarGenerator } from "@/components/AvatarGenerator";
import { BottomNav } from "@/components/BottomNav";
import { SectionHeader } from "@/components/SectionHeader";
import { TopBar } from "@/components/TopBar";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-cloud">
      <TopBar />
      <main className="mx-auto max-w-4xl space-y-6 px-4 pb-24 pt-8">
        <section className="rounded-3xl border border-white/60 bg-white p-6 shadow-soft">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 rounded-full bg-ink/80">
                <Image src="/avatars/juniper.svg" alt="Avatar" fill className="rounded-full" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-ink">Dilshod Q.</h1>
                <p className="text-sm text-ink/60">"Yechimchi" • Frontend innovator</p>
                <div className="mt-2 flex items-center gap-3 text-xs text-ink/60">
                  <span className="inline-flex items-center gap-1">
                    <Star size={14} className="text-silk" /> 4.9
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={14} /> Mirzo Ulug'bek
                  </span>
                </div>
              </div>
            </div>
            <AvatarGenerator />
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-ink/60">
            {[
              "Next.js",
              "Supabase",
              "Figma",
              "Uzbek UX"
            ].map((skill) => (
              <span key={skill} className="rounded-full border border-ink/10 px-2 py-1">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/60 bg-white p-6 shadow-soft">
          <SectionHeader title="Yechimlar tarixi" description="So'nggi 30 kunlik faoliyat." />
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {[
              "Lada loyiha uchun 2 ta yechim",
              "Plov retsepti bo'yicha konsultatsiya",
              "Fermerlar ilovasi prototipi"
            ].map((item) => (
              <div key={item} className="rounded-2xl border border-ink/10 bg-cloud p-4 text-sm text-ink">
                <BadgeCheck size={16} className="text-oasis" />
                <p className="mt-2">{item}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <BottomNav />
    </div>
  );
}
