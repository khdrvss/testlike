import { BottomNav } from "@/components/BottomNav";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { TopBar } from "@/components/TopBar";
import { projects } from "@/lib/mock-data";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-cloud">
      <TopBar />
      <main className="mx-auto max-w-6xl space-y-6 px-4 pb-24 pt-8">
        <SectionHeader
          title="Loyihalar feedi"
          description="Cheksiz scroll (demo) — real muammolar va mukofotlar."
          actionLabel="Yangi loyiha"
          actionHref="/projects/new"
        />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
