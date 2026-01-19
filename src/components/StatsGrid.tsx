interface StatProps {
  label: string;
  value: string;
}

export function StatsGrid({ stats }: { stats: StatProps[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="rounded-2xl border border-white/70 bg-white p-4 shadow-soft">
          <p className="text-xs text-ink/60">{stat.label}</p>
          <p className="mt-2 text-2xl font-semibold text-ink">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
