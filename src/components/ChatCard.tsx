interface ChatCardProps {
  name: string;
  lastMessage: string;
  members: number;
  time: string;
}

export function ChatCard({ name, lastMessage, members, time }: ChatCardProps) {
  return (
    <div className="rounded-2xl border border-white/60 bg-white p-4 shadow-soft">
      <div className="flex items-center justify-between">
        <h3 className="text-base font-semibold text-ink">{name}</h3>
        <span className="text-xs text-ink/60">{time}</span>
      </div>
      <p className="mt-2 text-sm text-ink/70">{lastMessage}</p>
      <p className="mt-3 text-xs text-ink/50">{members} ishtirokchi</p>
    </div>
  );
}
