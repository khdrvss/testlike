import { BottomNav } from "@/components/BottomNav";
import { NotificationCard } from "@/components/NotificationCard";
import { SectionHeader } from "@/components/SectionHeader";
import { TopBar } from "@/components/TopBar";
import { notifications } from "@/lib/mock-data";

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-cloud">
      <TopBar />
      <main className="mx-auto max-w-3xl space-y-6 px-4 pb-24 pt-8">
        <SectionHeader
          title="Bildirishnomalar"
          description="All, Unread, Mentions filtrlari demo ko'rinishda."
        />
        <div className="space-y-4">
          {notifications.map((notice) => (
            <NotificationCard key={notice.id} {...notice} />
          ))}
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
