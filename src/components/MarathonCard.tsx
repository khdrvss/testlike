interface MarathonCardProps {
  title: string;
  goal: string;
  reward: string;
}

export function MarathonCard({ title, goal, reward }: MarathonCardProps) {
  return (
    <div className="rounded-2xl border border-ink/10 bg-white p-5 shadow-soft">
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm text-ink/70">{goal}</p>
      <div className="mt-3 rounded-xl bg-silk/20 px-4 py-3 text-xs font-semibold text-ink">
        Mukofot: {reward}
      </div>
      <button className="mt-4 w-full rounded-full border border-ink/20 py-2 text-sm font-semibold text-ink">
        Qatnashish
      </button>
    </div>
  );
}
