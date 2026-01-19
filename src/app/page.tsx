import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Wallet2 } from "lucide-react";
import { AvatarGenerator } from "@/components/AvatarGenerator";
import { BottomNav } from "@/components/BottomNav";
import { ProjectCard } from "@/components/ProjectCard";
import { QuoteCarousel } from "@/components/QuoteCarousel";
import { SectionHeader } from "@/components/SectionHeader";
import { StatsGrid } from "@/components/StatsGrid";
import { TopBar } from "@/components/TopBar";
import { heroStats, projects } from "@/lib/mock-data";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cloud">
      <TopBar />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 pb-24 pt-8">
        <section className="grid gap-8 rounded-3xl border border-white/60 bg-hero-gradient p-6 shadow-soft md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-ink">
              <Sparkles size={14} /> O'zbek yechimchilari uchun platforma
            </span>
            <h1 className="text-3xl font-semibold leading-tight text-ink md:text-4xl">
              Muammo qo'ying, hamkor toping, mukofot oling — Co-found.uz bilan yangi imkoniyatlar.
            </h1>
            <p className="text-sm text-ink/70 md:text-base">
              Toshkentdan boshlab butun O'zbekiston uchun yaratilgan: mahalla xizmatlari, kichik biznes,
              agritech va kreativ loyihalar uchun yagona joy.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/projects/new"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white"
              >
                Muammo joylash
                <ArrowUpRight size={16} />
              </Link>
              <button className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-5 py-3 text-sm font-semibold text-ink">
                <Wallet2 size={16} /> TON / Uzcard ulash
              </button>
            </div>
            <QuoteCarousel />
          </div>
          <div className="relative flex flex-col justify-between gap-6 rounded-3xl bg-white/80 p-5">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-ink/50">
                Yechimchi profili
              </p>
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 rounded-full bg-ink/90">
                  <Image
                    src="/avatars/atlas.svg"
                    alt="Yechimchi"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-base font-semibold text-ink">Nigora A.</p>
                  <p className="text-sm text-ink/60">"Yechimchi" • 4.9 yulduz</p>
                </div>
              </div>
              <p className="text-sm text-ink/70">
                "Har bir loyiha — yangi hamkorlik." — 12 ta yechim, 4 ta tavsiya.
              </p>
            </div>
            <AvatarGenerator />
          </div>
        </section>

        <StatsGrid stats={heroStats} />

        <section className="space-y-5">
          <SectionHeader
            title="Ochiq loyihalar"
            description="Sizning shahringizdagi real muammolar. Ulaning va yechim taklif qiling."
            actionLabel="Hammasini ko'rish"
            actionHref="/projects"
          />
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-white/60 bg-white p-6 shadow-soft md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-ink">Onboarding: 3 qadamdа yechim toping</h2>
            <ol className="space-y-3 text-sm text-ink/70">
              <li>1. Muammoingizni qisqa va lo'nda yozing.</li>
              <li>2. Yechimchilar fikr bildiradi, siz eng yaxshi yechimni tanlaysiz.</li>
              <li>3. Bounty yoki badge beriladi — hamkorlik davom etadi.</li>
            </ol>
            <Link
              href="/auth"
              className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-semibold text-ink"
            >
              Ro'yxatdan o'tish
              <ArrowUpRight size={16} />
            </Link>
          </div>
          <div className="rounded-2xl bg-ink text-white p-6">
            <p className="text-sm text-white/70">"Yechim Marathon" haftalik chaqiruv</p>
            <h3 className="mt-3 text-xl font-semibold">5 ta Toshkent transport muammosini yeching</h3>
            <p className="mt-2 text-sm text-white/70">
              Guruh bilan birga ishlang, best practice larni bo'lishing va Silk Road badge yutib oling.
            </p>
            <Link href="/yechim-marafon" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
              Batafsil
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <BottomNav />
    </div>
  );
}
