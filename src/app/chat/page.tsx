import { BottomNav } from "@/components/BottomNav";
import { ChatCard } from "@/components/ChatCard";
import { SectionHeader } from "@/components/SectionHeader";
import { TopBar } from "@/components/TopBar";
import { chats } from "@/lib/mock-data";

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-cloud">
      <TopBar />
      <main className="mx-auto max-w-4xl space-y-6 px-4 pb-24 pt-8">
        <SectionHeader
          title="Chatlar"
          description="Supabase Realtime orqali tezkor muloqot."
          actionLabel="Yangi chat"
          actionHref="/chat"
        />
        <div className="space-y-4">
          {chats.map((chat) => (
            <ChatCard key={chat.id} {...chat} />
          ))}
        </div>
      </main>
      <BottomNav />
    </div>
  );
}
