import { Star } from "lucide-react";

interface PersonCardProps {
  name: string;
  role: string;
  location: string;
  rating: number;
  skills: string[];
  badge: string;
}

export function PersonCard({ name, role, location, rating, skills, badge }: PersonCardProps) {
  return (
    <div className="rounded-2xl border border-white/60 bg-white p-5 shadow-soft">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-ink">{name}</h3>
          <p className="text-sm text-ink/70">{role}</p>
        </div>
        <span className="rounded-full bg-silk/40 px-3 py-1 text-xs font-semibold text-ink">
          {badge}
        </span>
      </div>
      <div className="mt-3 flex items-center gap-2 text-xs text-ink/60">
        <Star size={14} className="text-silk" />
        {rating} • {location}
      </div>
      <div className="mt-3 flex flex-wrap gap-2 text-xs text-ink/60">
        {skills.map((skill) => (
          <span key={skill} className="rounded-full border border-ink/10 px-2 py-1">
            {skill}
          </span>
        ))}
      </div>
      <button className="mt-4 w-full rounded-full bg-ink py-2 text-sm font-semibold text-white">
        Ulanish
      </button>
    </div>
  );
}
