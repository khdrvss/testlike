import { BottomNav } from "@/components/BottomNav";
import { PersonCard } from "@/components/PersonCard";
import { SectionHeader } from "@/components/SectionHeader";
import { TopBar } from "@/components/TopBar";
import { people } from "@/lib/mock-data";

export default function PeoplePage() {
  return (
    <div className="min-h-screen bg-cloud">
      <TopBar />
      <main className="mx-auto max-w-6xl space-y-6 px-4 pb-24 pt-8">
        <SectionHeader
          title="Yechimchilar"
          description="Skill, joylashuv va reyting bo'yicha toping."
          actionLabel="Filtr"
          actionHref="/people"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {people.map((person) => (
            <PersonCard key={person.id} {...person} />
          ))}
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
