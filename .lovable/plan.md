
# PlayHub — Full Frontend Shell

Building the complete PlayHub app: all screens, navigation, game catalog, deck builder, auth, and role-based game views — with mock/simulated game state (no live multiplayer yet). Dark Gen Z aesthetic, mobile-first, Lovable Cloud backend.

---

## 1. Design System & App Shell
- **Color palette:** Deep dark background (`#08080f`), indigo/violet primary (`#6366f1` / `#8b5cf6`), hot accent (`#ec4899`). Full dark mode by default.
- **Typography:** Bold, large-scale type — question text 20–24px, body min 16px.
- **Mobile shell:** Portrait-constrained layout (`max-w-[430px]` centered). Desktop shows a phone-shaped container.
- **Bottom nav bar (mobile):** Home · Play · Create · Leaderboard · Profile — 5 tabs with icons, active state glow.
- **Micro-animations:** Card flips, countdown overlays, score ticks, transition slides.

---

## 2. Homepage (`/`)
- Hero section: bold tagline "Play Together, Anywhere" + animated preview of a game in action (mock).
- Featured games grid: Charades, Taboo, Tug of War, Quiz, Daily Word, Flags — as glowing game cards.
- "Join a Room" input field + "Create Room" CTA — both prominent, no login required.
- Social proof ticker: "1,240 players active now".
- How it works: 3-step animation (Create → Share → Play).

---

## 3. Games Hub (`/play`)
- Filterable game catalog with tabs: **All · Party · Knowledge · Solo**.
- Each game card: name, player count range, rotation mode badge (e.g. "Teams", "Solo"), animated preview thumbnail.
- 25+ games listed per the PRD catalog (Charades, Taboo, Tug of War, Online Quiz, Memory, Flags, Fishbowl, Hot Seat, Would You Rather, Two Truths, Draw & Guess, and more).
- Search bar + category filter chips.

---

## 4. Guest Join & Room Creation Flow
- **`/join`** — Single name input "What's your name?", tap "Join Room". No email, no password.
- **Room code entry** — large 4-char code input with number/letter pad.
- **`/room/[code]`** — Lobby screen: room code prominent at top, QR code displayed, player join list with animated avatar initials, team assignment, "Start Game" button for host. Waiting animation for players.
- QR code generated client-side via a QR library.

---

## 5. Game Screens — Role-Based Views (Simulated)

Each game page shows **different view states** with a demo toggle so you can see all roles:

**Charades (`/room/[code]/game/charades`)**
- **Actor view (PRIVATE_ACTIVE):** Large word display, 60s countdown ring, "Got It ✓" (large, thumb-zone), "Skip" (smaller, separated), team score.
- **Watcher view (PUBLIC_WATCHING):** "Guess what they're miming!", real-time timer, animated thinking placeholder.
- **Host overlay:** all watcher info + player list, skip/end controls.

**Taboo (`/room/[code]/game/taboo`)**
- **Describer view:** Target word large + 5 forbidden words in red below. "Correct ✓" and "Skip".
- **Opposing team view:** Large red "BUZZ 🔴" button. Buzz triggers -1 point animation.
- **Own team view:** Timer, score, encourage message.

**Tug of War (`/room/[code]/game/tug-of-war`)**
- Question + 4 answer options (full-width buttons).
- Animated rope with flag moving left/right in real time.
- Score bar at top.

**Online Quiz**
- Question + 4 options. Speed multiplier countdown bar. Lock-in state. Leaderboard flash between questions.

**Post-game scorecard** — podium animation, MVP badge, "Share to Stories" button (9:16 card preview), "Play Again" CTA.

---

## 6. Deck Builder (`/create`)
- Game type selector: Charades · Taboo · Quiz · True/False · Alias · Find the Pair.
- Card editor: type-specific form (Taboo = target + 5 forbidden words; Quiz = question + 4 options + correct marker).
- Bulk CSV import with inline validation errors.
- Deck metadata: title, description, category, age rating, visibility (Private / Link / Public).
- **AI Generator tab:** Topic input field, card count selector (10/20/40), difficulty toggle, "Generate ✨" button with progress bar — simulated output flow, ready to hook up to OpenAI later.

---

## 7. Auth & Dashboard
- **`/auth`** — Google OAuth (one-tap) + email/password. Guest-first: auth only prompted contextually.
- **`/dashboard`** — My Decks (grid with edit/delete/visibility toggle), Play History list (last 10 sessions), Personal Bests per game.
- Profile page: display name, avatar (initials-generated), streak badge, plan tier badge.

---

## 8. Leaderboard (`/leaderboard`)
- Tab switcher: Global · Friends · Daily.
- Per-game filter. Top 10 with rank, name, score, avatar ring.
- Personal rank row always pinned at bottom.

---

## 9. Backend (Lovable Cloud / Supabase)
- **Auth:** Email + Google OAuth via Supabase Auth.
- **Tables:** `profiles`, `rooms`, `room_players`, `decks`, `cards`, `play_sessions`.
- **RLS policies:** Users can only see/edit their own decks. Room data accessible to room participants.
- Guest sessions stored client-side (localStorage), with upgrade path to full account.

---

## Phased Delivery Order
1. Design system + app shell + bottom nav
2. Homepage + Games Hub catalog
3. Guest join flow + room lobby screens
4. Game screens (Charades, Taboo, Tug of War, Quiz) with role-based view toggle
5. Deck Builder + AI Generator UI
6. Auth + Dashboard + Profile
7. Leaderboard + Post-game scorecard
8. Supabase schema + RLS wired to all data-dependent screens
