import Link from "next/link";
import { BadgeCheck, MapPin } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  bounty: string;
  tags: string[];
  author: string;
  location: string;
}

export function ProjectCard({
  id,
  title,
  description,
  bounty,
  tags,
  author,
  location
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${id}`}
      className="block rounded-2xl border border-white/60 bg-white p-5 shadow-soft transition hover:-translate-y-1"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-ink">{title}</h3>
          <p className="mt-2 text-sm text-ink/70">{description}</p>
        </div>
        <div className="rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white">
          {bounty}
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 text-xs text-ink/60">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full border border-ink/10 px-2 py-1">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between text-xs text-ink/60">
        <span className="inline-flex items-center gap-1">
          <BadgeCheck size={14} /> {author}
        </span>
        <span className="inline-flex items-center gap-1">
          <MapPin size={14} /> {location}
        </span>
      </div>
    </Link>
  );
}
