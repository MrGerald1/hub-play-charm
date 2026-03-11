

# PlayHub Content Bible — Full Implementation Plan

This is a large implementation covering the entire 44-page Content Bible. We'll break it into phases, each deliverable independently.

---

## Phase 1: Design System Overhaul

The Content Bible rejects the current indigo/corporate look and demands a "Trivia Crack-inspired, toy-like" aesthetic.

**What changes:**
- **Fonts**: Replace Space Grotesk + Inter with **Fredoka One** (display/scores/timer) + **Plus Jakarta Sans** (body/questions/answers)
- **Colors**: Add game-family color tokens — Sky Blue `#38BDF8` (Knowledge), Fire Orange `#F97316` (Party), Deep Rose `#F43F5E` (18+), Soft Purple `#A78BFA` (Solo Skill), Hot Yellow `#FBBF24` (Surprise Me). Keep Deep Dark `#0F172A` as background, PlayHub Purple `#8B5CF6` as primary
- **Button style**: 3D depth — soft drop shadows, inner highlights, press animations (scale to 96% on tap). Min touch target 48x48px
- **Game cards**: Dark card with game-family color as left border accent, emoji + colored badge (mascot stand-in), rounded corners 16px, drop shadow, tap-scale animation
- **Micro-animations**: Correct = green burst + score increment. Wrong = red shake. Timer under 5s = red pulse. Win = confetti burst. Coin earn = rain effect

**Files affected:** `tailwind.config.ts`, `src/index.css`, `src/components/GameCard.tsx`, all game pages, button styles

---

## Phase 2: Game Catalog Expansion (40+ games)

Update `src/data/games.ts` to include all 40+ games from the Content Bible with proper family color coding:

- **Knowledge family** (Sky Blue): Quiz, Tug of War, Flags, True/False, Memory, Grouping, AI Crossword, Find the Pair, Daily Word, Word Chain, Rapid Math, Type Race
- **Party family** (Fire Orange): Charades, Taboo, Fishbowl, Name That Tune, Finish the Lyric, Draw & Guess, Alias, Hot Seat, Story Builder, Speed Round, Emoji Decode, Two Truths, Would You Rather, Never Have I Ever, Most Likely To, This or That, Spy Game, Guess the Price, Word Association, Category Sprint, 20 Questions vs AI, Debate Roulette, Celebrity Couples, Acronym Game
- **18+ Adult family** (Deep Rose): Bad People, Buzzed/Exposed, Wyld Cards/Dare Levels, Confession Roulette, Spicy Truths
- **Solo Skill family** (Soft Purple): Type Race, Reaction Test, Daily Word, Rapid Math, Pattern Match

Add `family` field and `familyColor` to the game type. Add age-gate toggle for 18+ games.

---

## Phase 3: Content Data Seeding

Create data files with all seeded content from the Content Bible:

- `src/data/daily-words.ts` — 120 words with difficulty (E/M/H), week/day mapping
- `src/data/trivia-questions.ts` — ~200 questions across 6 categories (Science, Entertainment, History, Sports, Art & Literature, General Knowledge) with options, correct answer, difficulty, and category tag
- `src/data/emoji-decode.ts` — 80+ movie puzzles, 80+ song puzzles, 50+ Naija phrase puzzles, 40+ TV show puzzles
- `src/data/most-likely-to.ts` — 80 standard prompts, 60 Nigerian edition, 40 friends/couples
- `src/data/speed-round.ts` — 200 category cards with difficulty and example answers
- `src/data/story-builder.ts` — 60 starter sentences with genre/tone tags
- `src/data/spy-locations.ts` — 80 locations across 5 categories (Nigerian Life, African Landmarks, Global, Events, Unusual) + question prompt cards
- `src/data/word-chain.ts` — 60 seed words with ending letter and challenge level
- `src/data/category-sprint.ts` — 200 category cards
- `src/data/fishbowl.ts` — Submission prompts + themed word packs
- `src/data/adult/most-likely-to-18.ts` — 200 cards across 4 categories (Relationships, Money, Secrets, Nigerian-Specific)
- `src/data/adult/exposed.ts` — 200 statement cards (General Life, Nigerian Life, Relationships)
- `src/data/adult/dare-levels.ts` — 150 cards across 3 tiers (Mild, Medium, Hot)
- `src/data/adult/confession-roulette.ts` — 100 confession prompts

---

## Phase 4: New Game Screen UIs

Build simulated game screens for each new game. Each screen shows the core mechanic with mock state and a role/view toggle where applicable:

- **Emoji Decode** — Show emoji sequence, text input for guessing, reveal animation
- **Most Likely To** — Show prompt, voting UI (tap player avatars), reveal who got most votes
- **Speed Round** — Category display, 30s countdown, item input list
- **Story Builder** — Sentence chain display, input for next sentence, "End Story" button
- **Spy Game** — Location card (or "You are the SPY"), question prompt cards, voting phase
- **Word Chain** — Current word display, 3s timer, input field, life counter (3 hearts)
- **Never Have I Ever** — Statement display, "I Have" / "I Haven't" buttons, finger counter
- **Would You Rather** — Two options, vote split bar animation
- **Two Truths & A Lie** — 3 statements, vote on which is the lie
- **Hot Seat** — Question display, group answer input
- **Fishbowl** — 3-round mechanic with word submission phase
- **Category Sprint** — Category, 45s timer, rapid text input, score
- **Draw & Guess** — Canvas placeholder + guess input
- **This or That** — Binary choice with animated vote split
- **Exposed (18+)** — Statement card, "Drink" button with counter
- **Dare Levels (18+)** — Card draw with tier badge (Mild/Medium/Hot)
- **Confession Roulette (18+)** — Anonymous submission + group voting
- **Spicy Truths (18+)** — Escalating truth questions with "Pay to Skip" mechanic

---

## Phase 5: Spinning Wheel ("Surprise Me")

Add to the homepage:
- Animated spinning wheel occupying ~60% viewport width
- Segments color-coded by game family, proportional to game count
- Flick-to-spin physics with realistic friction deceleration
- Landing result: emoji + colored badge pops up with "You're playing [Game]!" + "Let's Go" / "Spin Again"
- 18+ toggle ring (only visible if 18+ enabled in settings)
- Slow idle rotation (2 RPM) when not actively spinning

---

## Phase 6: 18+ Age Gate & Settings

- Settings page with 18+ content toggle (default: off)
- Age confirmation modal on first enable
- 18+ games hidden from catalog unless enabled
- Deep Rose color treatment for all 18+ game cards
- Spinning wheel conditionally includes 18+ segments

---

## Phase 7: Coin Economy UI (Visual Only)

- Coin counter in header/profile
- Coin earn animations on correct answers / wins
- Coin display on leaderboard entries
- Visual framework ready for future backend integration

---

## Delivery Order

We'll implement in this sequence across multiple messages:
1. Design system overhaul (fonts, colors, button styles, card redesign)
2. Game catalog expansion + family color coding
3. Content data files (all seeded content)
4. New game screen UIs (batch of ~18 screens)
5. Spinning wheel mechanic
6. 18+ age gate + settings
7. Coin economy visuals

Each phase is self-contained and testable. The design system goes first because every subsequent phase depends on the new visual language.

