interface NotificationCardProps {
  title: string;
  description: string;
  time: string;
  unread: boolean;
}

export function NotificationCard({ title, description, time, unread }: NotificationCardProps) {
  return (
    <div
      className={`rounded-2xl border p-4 shadow-soft ${
        unread ? "border-oasis/30 bg-white" : "border-white/50 bg-white/70"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-semibold text-ink">{title}</h3>
          <p className="mt-1 text-sm text-ink/70">{description}</p>
        </div>
        {unread ? <span className="h-2 w-2 rounded-full bg-oasis" /> : null}
      </div>
      <p className="mt-3 text-xs text-ink/50">{time}</p>
    </div>
  );
}
