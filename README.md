# Co-found.uz

Co-found.uz — O'zbekiston uchun lokalizatsiya qilingan yechimchilar hamjamiyati: real muammolarni birga yechish, mukofot olish va hamkor topish platformasi.

## ✨ Asosiy imkoniyatlar
- Minimalistik Uzbek modern UI (Registan ilhomi, navoi quotes, Silk Road motiflari).
- Loyihalar feedi, yechimlar, bounty/tiplar, Yechim Marathon haftalik chaqiruvlari.
- Profil, odamlar katalogi, chatlar, bildirishnomalar.
- TON yoki Uzcard integratsiya nuqtalari (MVP mock).
- PWA tayyor (manifest + iconlar).

## 🧰 Texnologiyalar
- **Next.js 15 (App Router)**
- **Tailwind CSS**
- **Supabase (Auth, Postgres, Realtime, Storage)**
- **Framer Motion**, **Zod**, **shadcn/ui style building blocks**

## 🏗️ Ishga tushirish

```bash
npm install
npm run dev
```

Ilova default `http://localhost:3000` da ishga tushadi.

## 🔐 Muhim ENV o'zgaruvchilar
`.env.local` yarating:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## 🧱 Supabase SQL migratsiya
- `supabase/migrations/0001_init.sql` fayli barcha jadval va aloqalarni yaratadi.
- `supabase/seed/seed.sql` fayli 10 ta demo foydalanuvchi va loyihalarni kiritadi.

Misol:
```bash
supabase db reset
psql "$SUPABASE_DB_URL" -f supabase/migrations/0001_init.sql
psql "$SUPABASE_DB_URL" -f supabase/seed/seed.sql
```

## 📦 Deploy
- **Frontend:** Vercel
- **Backend:** Supabase

## 🧪 Demo ko'rinishlar
- `Home`: Hero + feed + onboarding
- `Projects`: loyihalar ro'yxati
- `People`: yechimchilar katalogi
- `Chat`: real-time chat maket
- `Profile`: avatar generator va skilllar

## 📌 Roadmap
- Supabase Auth + Google OAuth
- Realtime chat + typing indicator
- Push notifications (PWA)
- TON/Uzcard to'lovlari

---

Made with 🇺🇿 by Co-found.uz.
