import Link from "next/link";
import { Home, Users, MessageCircle, User } from "lucide-react";

const navItems = [
  { href: "/", label: "Loyihalar", icon: Home },
  { href: "/people", label: "Odamlar", icon: Users },
  { href: "/chat", label: "Chat", icon: MessageCircle },
  { href: "/profile", label: "Profil", icon: User }
];

export function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/70 bg-white/90 backdrop-blur nav-shadow md:hidden">
      <div className="flex items-center justify-around px-4 py-3">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex flex-col items-center text-xs text-ink"
          >
            <item.icon size={18} />
            <span className="mt-1">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
