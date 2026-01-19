import { navoiQuotes } from "@/lib/mock-data";

export function QuoteCarousel() {
  return (
    <div className="rounded-2xl border border-silk/40 bg-white/80 p-4 quote-card">
      <p className="text-sm font-medium text-ink">"{navoiQuotes[0]}"</p>
      <p className="mt-2 text-xs text-ink/60">— Alisher Navoiy ruhidagi maslahat</p>
    </div>
  );
}
