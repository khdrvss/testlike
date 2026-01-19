import Link from "next/link";
import { ArrowLeft, BadgeCheck, MessageCircle, ThumbsUp } from "lucide-react";
import { BottomNav } from "@/components/BottomNav";
import { SectionHeader } from "@/components/SectionHeader";
import { TopBar } from "@/components/TopBar";
import { projects } from "@/lib/mock-data";

interface ProjectDetailProps {
  params: { id: string };
}

export default function ProjectDetailPage({ params }: ProjectDetailProps) {
  const project = projects.find((item) => item.id === params.id) ?? projects[0];

  return (
    <div className="min-h-screen bg-cloud">
      <TopBar />
      <main className="mx-auto max-w-4xl space-y-8 px-4 pb-24 pt-6">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-ink/70">
          <ArrowLeft size={16} /> Orqaga
        </Link>

        <section className="rounded-3xl border border-white/60 bg-white p-6 shadow-soft">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold text-ink">{project.title}</h1>
              <p className="mt-2 text-sm text-ink/70">{project.description}</p>
            </div>
            <span className="rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white">
              {project.bounty}
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-ink/60">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-ink/10 px-2 py-1">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-3 text-xs text-ink/60">
            <BadgeCheck size={14} /> {project.author} • {project.location}
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <button className="rounded-full bg-ink py-2 text-sm font-semibold text-white">
              Yechim yuborish
            </button>
            <button className="rounded-full border border-ink/20 py-2 text-sm font-semibold text-ink">
              Fikr bildirish
            </button>
            <button className="rounded-full border border-ink/20 py-2 text-sm font-semibold text-ink">
              Bounty ulash
            </button>
          </div>
        </section>

        <section className="space-y-4">
          <SectionHeader title="Yechimlar" description="Eng yaxshi fikrlar yuqoriga chiqadi." />
          {[1, 2].map((item) => (
            <div key={item} className="rounded-2xl border border-white/60 bg-white p-5 shadow-soft">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-ink">Yechimchi {item}</p>
                  <p className="text-xs text-ink/60">Toshkent • 2 soat oldin</p>
                </div>
                <button className="inline-flex items-center gap-1 text-xs text-ink/60">
                  <ThumbsUp size={14} /> 12
                </button>
              </div>
              <p className="mt-3 text-sm text-ink/70">
                Taklif: loyihani 2 haftalik sprintga bo'lib, birinchi haftada prototip, keyingi haftada test
                qilamiz.
              </p>
              <button className="mt-3 inline-flex items-center gap-2 text-xs text-ink/60">
                <MessageCircle size={14} /> Javob yozish
              </button>
            </div>
          ))}
        </section>
      </main>
      <BottomNav />
    </div>
  );
}
