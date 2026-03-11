export type GameFamily = "knowledge" | "party" | "adult" | "solo" | "surprise";

export interface Game {
  id: string;
  name: string;
  description: string;
  emoji: string;
  players: string;
  category: "party" | "knowledge" | "solo" | "team";
  family: GameFamily;
  mode: string;
  featured?: boolean;
  is18Plus?: boolean;
}

export const familyConfig: Record<GameFamily, { label: string; color: string; bgClass: string; borderClass: string; glowClass: string; mascotEmoji: string }> = {
  knowledge: { label: "Knowledge & Skill", color: "hsl(199 89% 60%)", bgClass: "bg-knowledge", borderClass: "family-border-knowledge", glowClass: "glow-knowledge", mascotEmoji: "⚡" },
  party: { label: "Party & Social", color: "hsl(25 95% 53%)", bgClass: "bg-party", borderClass: "family-border-party", glowClass: "glow-party", mascotEmoji: "🐒" },
  adult: { label: "18+ Adult", color: "hsl(350 89% 60%)", bgClass: "bg-adult", borderClass: "family-border-adult", glowClass: "glow-adult", mascotEmoji: "😈" },
  solo: { label: "Solo Skill", color: "hsl(263 78% 72%)", bgClass: "bg-solo", borderClass: "family-border-solo", glowClass: "glow-solo", mascotEmoji: "💨" },
  surprise: { label: "Surprise Me", color: "hsl(43 96% 56%)", bgClass: "bg-surprise", borderClass: "family-border-surprise", glowClass: "glow-surprise", mascotEmoji: "🎡" },
};

export const games: Game[] = [
  // Knowledge family
  { id: "quiz", name: "Online Quiz", description: "Speed matters — fastest correct wins", emoji: "🧠", players: "2-100", category: "knowledge", family: "knowledge", mode: "Teams / All", featured: true },
  { id: "tug-of-war", name: "Tug of War", description: "Answer questions, pull the rope!", emoji: "🪢", players: "2-10", category: "knowledge", family: "knowledge", mode: "1v1", featured: true },
  { id: "flags", name: "Flags of the World", description: "Name the country from its flag", emoji: "🏳️", players: "1-10", category: "knowledge", family: "knowledge", mode: "Solo/Race", featured: true },
  { id: "daily-word", name: "Daily Word", description: "One word, one chance, every day", emoji: "📅", players: "1", category: "solo", family: "knowledge", mode: "Solo", featured: true },
  { id: "memory", name: "Memory Match", description: "Find the matching pairs", emoji: "🧩", players: "1-4", category: "solo", family: "knowledge", mode: "Solo" },
  { id: "true-false", name: "True or False", description: "Is it fact or fiction?", emoji: "✅", players: "1-20", category: "knowledge", family: "knowledge", mode: "All" },
  { id: "grouping", name: "Grouping / Connections", description: "Find the hidden connections", emoji: "🔗", players: "1-20", category: "knowledge", family: "knowledge", mode: "Solo / All" },
  { id: "ai-crossword", name: "AI Crossword", description: "AI-generated crossword puzzles", emoji: "🔤", players: "1-4", category: "knowledge", family: "knowledge", mode: "Solo/Co-op" },
  { id: "find-pair", name: "Find the Pair", description: "Match items that go together", emoji: "🔗", players: "1-6", category: "solo", family: "knowledge", mode: "Solo" },
  { id: "word-chain", name: "Word Chain", description: "Last letter becomes first letter", emoji: "🔤", players: "2-8", category: "knowledge", family: "knowledge", mode: "Rotation" },
  { id: "trivia-crack", name: "Trivia Crack", description: "Category-based trivia challenge", emoji: "🎯", players: "2-8", category: "knowledge", family: "knowledge", mode: "Solo / 1v1" },
  { id: "speed-round", name: "Speed Round", description: "Name 5 things in 30 seconds", emoji: "⚡", players: "2-10", category: "knowledge", family: "knowledge", mode: "Rotation" },

  // Solo Skill family
  { id: "rapid-math", name: "Rapid Math", description: "Solve equations at lightning speed", emoji: "➕", players: "1-20", category: "solo", family: "solo", mode: "Solo / Race" },
  { id: "type-race", name: "Type Race", description: "Fastest fingers win the race", emoji: "⌨️", players: "1-20", category: "solo", family: "solo", mode: "Solo / Race" },
  { id: "reaction-test", name: "Reaction Test", description: "How fast can you react?", emoji: "⚡", players: "1+", category: "solo", family: "solo", mode: "Solo" },
  { id: "pattern-match", name: "Pattern Match", description: "Spot the pattern before time runs out", emoji: "🔵", players: "1", category: "solo", family: "solo", mode: "Solo" },

  // Party family
  { id: "charades", name: "Charades", description: "Act it out, no words allowed!", emoji: "🎭", players: "4-20", category: "party", family: "party", mode: "Teams", featured: true },
  { id: "taboo", name: "Taboo", description: "Describe without forbidden words", emoji: "🚫", players: "4-16", category: "party", family: "party", mode: "Teams", featured: true },
  { id: "fishbowl", name: "Fishbowl", description: "3 rounds: Describe, Act, One Word", emoji: "🐟", players: "6-20", category: "party", family: "party", mode: "Teams" },
  { id: "name-that-tune", name: "Name That Tune", description: "Name that tune before anyone else!", emoji: "🎵", players: "2-20", category: "party", family: "party", mode: "Buzz Race" },
  { id: "finish-the-lyric", name: "Finish the Lyric", description: "Complete the missing lyrics", emoji: "🎶", players: "2-20", category: "party", family: "party", mode: "Buzz Race" },
  { id: "two-truths", name: "Two Truths & A Lie", description: "Spot the lie among truths", emoji: "🤥", players: "3-15", category: "party", family: "party", mode: "Rotation" },
  { id: "hot-seat", name: "Hot Seat", description: "Answer personal questions, group guesses", emoji: "🔥", players: "3-15", category: "party", family: "party", mode: "Rotation" },
  { id: "would-you-rather", name: "Would You Rather", description: "Pick your side — no in-between", emoji: "🤔", players: "2-20", category: "party", family: "party", mode: "All" },
  { id: "draw-guess", name: "Draw & Guess", description: "Draw it — can they guess it?", emoji: "🎨", players: "3-12", category: "party", family: "party", mode: "Rotation" },
  { id: "alias", name: "Alias", description: "Explain the word without using it", emoji: "💬", players: "4-20", category: "party", family: "party", mode: "Teams" },
  { id: "never-have-i", name: "Never Have I Ever", description: "Reveal who has done what", emoji: "🙈", players: "3-20", category: "party", family: "party", mode: "All" },
  { id: "most-likely", name: "Most Likely To", description: "Vote who's most likely to...", emoji: "👆", players: "3-15", category: "party", family: "party", mode: "All" },
  { id: "this-or-that", name: "This or That", description: "Binary choices, infinite debates", emoji: "🔀", players: "2-30", category: "party", family: "party", mode: "All" },
  { id: "emoji-decode", name: "Emoji Decode", description: "Guess the movie/phrase from emojis", emoji: "😎", players: "2-15", category: "party", family: "party", mode: "All" },
  { id: "story-builder", name: "Story Builder", description: "Add one sentence at a time", emoji: "📖", players: "3-10", category: "party", family: "party", mode: "Rotation" },
  { id: "spy", name: "Spy Game", description: "Find the spy among you", emoji: "🕵️", players: "4-12", category: "party", family: "party", mode: "All" },
  { id: "guess-the-price", name: "Guess the Price", description: "How much does it really cost?", emoji: "💰", players: "2-20", category: "party", family: "party", mode: "All" },
  { id: "word-association", name: "Word Association", description: "Say the first word that comes to mind", emoji: "🔗", players: "2-6", category: "party", family: "party", mode: "Rotation" },
  { id: "category-sprint", name: "Category Sprint", description: "Name items in a category, fast!", emoji: "🏃", players: "2-10", category: "party", family: "party", mode: "Rotation" },
  { id: "20-questions", name: "20 Questions vs AI", description: "Can you stump the AI in 20 questions?", emoji: "🤖", players: "1-4", category: "party", family: "party", mode: "Solo/Co-op" },
  { id: "debate-roulette", name: "Debate Roulette", description: "Defend a random position!", emoji: "🎙️", players: "2-8", category: "party", family: "party", mode: "Rotation" },
  { id: "celebrity-couples", name: "Celebrity Couples", description: "Match the famous pairs", emoji: "💑", players: "2-12", category: "party", family: "party", mode: "All" },
  { id: "acronym-game", name: "Acronym Game", description: "Make up meanings for random letters", emoji: "🔡", players: "2-10", category: "party", family: "party", mode: "Rotation" },

  // 18+ Adult family
  { id: "bad-people", name: "Bad People", description: "Vote on who fits the awful question", emoji: "😈", players: "3-10", category: "party", family: "adult", mode: "All", is18Plus: true },
  { id: "buzzed", name: "Buzzed / Exposed", description: "Drink if the statement fits you", emoji: "🍺", players: "3-15", category: "party", family: "adult", mode: "All", is18Plus: true },
  { id: "wyld-cards", name: "Wyld Cards / Dare Levels", description: "Escalating dares from mild to wild", emoji: "🃏", players: "3-12", category: "party", family: "adult", mode: "All", is18Plus: true },
  { id: "confession-roulette", name: "Confession Roulette", description: "Anonymous confessions, group votes", emoji: "🎰", players: "3-15", category: "party", family: "adult", mode: "All", is18Plus: true },
  { id: "spicy-truths", name: "Spicy Truths", description: "Escalating truth questions you can't skip", emoji: "🌶️", players: "3-10", category: "party", family: "adult", mode: "Rotation", is18Plus: true },
];

export const categories = ["all", "knowledge", "party", "solo", "adult"] as const;
export type Category = typeof categories[number];
