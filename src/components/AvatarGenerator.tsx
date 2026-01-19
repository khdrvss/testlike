import * as Dialog from "@radix-ui/react-dialog";
import * as Avatar from "@radix-ui/react-avatar";
import { Sparkles } from "lucide-react";

const avatars = [
  "/avatars/atlas.svg",
  "/avatars/juniper.svg",
  "/avatars/kand.svg",
  "/avatars/registan.svg"
];

export function AvatarGenerator() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-semibold text-ink">
          <Sparkles size={16} /> Avatar tanlash
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-ink/40" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-[90vw] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 shadow-soft">
          <Dialog.Title className="text-lg font-semibold text-ink">
            Avatar generator
          </Dialog.Title>
          <Dialog.Description className="text-sm text-ink/70">
            O'z uslubingizni tanlang — pomegranate vibes yoki Registan geometriyasi.
          </Dialog.Description>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {avatars.map((avatar) => (
              <button
                key={avatar}
                className="rounded-2xl border border-ink/10 p-4 transition hover:-translate-y-1"
              >
                <Avatar.Root className="flex h-20 w-20 items-center justify-center rounded-full bg-cloud">
                  <Avatar.Image src={avatar} alt="Avatar" className="h-full w-full" />
                  <Avatar.Fallback className="text-xs font-semibold text-ink">UZ</Avatar.Fallback>
                </Avatar.Root>
                <p className="mt-2 text-xs text-ink/70">Yangi uslub</p>
              </button>
            ))}
          </div>
          <Dialog.Close asChild>
            <button className="mt-5 w-full rounded-full bg-ink py-2 text-sm font-semibold text-white">
              Tanlash
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
