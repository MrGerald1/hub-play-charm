export interface Game {
  id: string;
  name: string;
  description: string;
  emoji: string;
  players: string;
  category: "party" | "knowledge" | "solo" | "team";
  mode: string;
  color: string;
  featured?: boolean;
}

export const games: Game[] = [
  { id: "charades", name: "Charades", description: "Act it out, no words allowed!", emoji: "🎭", players: "4-20", category: "party", mode: "Teams", color: "from-primary to-secondary", featured: true },
  { id: "taboo", name: "Taboo", description: "Describe without forbidden words", emoji: "🚫", players: "4-20", category: "party", mode: "Teams", color: "from-secondary to-accent", featured: true },
  { id: "tug-of-war", name: "Tug of War", description: "Answer questions, pull the rope!", emoji: "🪢", players: "2-10", category: "knowledge", mode: "1v1", color: "from-accent to-primary", featured: true },
  { id: "quiz", name: "Online Quiz", description: "Speed matters — fastest correct wins", emoji: "🧠", players: "2-50", category: "knowledge", mode: "Solo", color: "from-primary to-accent", featured: true },
  { id: "daily-word", name: "Daily Word", description: "One word, one chance, every day", emoji: "📝", players: "1", category: "solo", mode: "Solo", color: "from-secondary to-primary", featured: true },
  { id: "flags", name: "Flags", description: "Name the country from its flag", emoji: "🏳️", players: "1-10", category: "knowledge", mode: "Solo", color: "from-accent to-secondary", featured: true },
  { id: "fishbowl", name: "Fishbowl", description: "3 rounds: Describe, Act, One Word", emoji: "🐟", players: "6-20", category: "party", mode: "Teams", color: "from-primary to-secondary" },
  { id: "hot-seat", name: "Hot Seat", description: "Answer personal questions, group guesses", emoji: "🔥", players: "3-15", category: "party", mode: "Rotation", color: "from-accent to-primary" },
  { id: "would-you-rather", name: "Would You Rather", description: "Pick your side — no in-between", emoji: "🤔", players: "2-20", category: "party", mode: "All", color: "from-secondary to-accent" },
  { id: "two-truths", name: "Two Truths & A Lie", description: "Spot the lie among truths", emoji: "🤥", players: "3-15", category: "party", mode: "Rotation", color: "from-primary to-accent" },
  { id: "draw-guess", name: "Draw & Guess", description: "Draw it — can they guess it?", emoji: "🎨", players: "3-12", category: "party", mode: "Rotation", color: "from-secondary to-primary" },
  { id: "memory", name: "Memory Match", description: "Find the matching pairs", emoji: "🧩", players: "1-4", category: "solo", mode: "Solo", color: "from-accent to-secondary" },
  { id: "alias", name: "Alias", description: "Explain the word without using it", emoji: "💬", players: "4-20", category: "party", mode: "Teams", color: "from-primary to-secondary" },
  { id: "find-pair", name: "Find the Pair", description: "Match items that go together", emoji: "🔗", players: "1-6", category: "solo", mode: "Solo", color: "from-secondary to-accent" },
  { id: "trivia-crack", name: "Trivia Crack", description: "Category-based trivia challenge", emoji: "🎯", players: "2-8", category: "knowledge", mode: "Solo", color: "from-accent to-primary" },
  { id: "word-chain", name: "Word Chain", description: "Last letter becomes first letter", emoji: "🔤", players: "2-8", category: "knowledge", mode: "Rotation", color: "from-primary to-accent" },
  { id: "emoji-decode", name: "Emoji Decode", description: "Guess the movie/phrase from emojis", emoji: "😎", players: "2-15", category: "party", mode: "All", color: "from-secondary to-primary" },
  { id: "never-have-i", name: "Never Have I Ever", description: "Reveal who has done what", emoji: "🙈", players: "3-20", category: "party", mode: "All", color: "from-accent to-secondary" },
  { id: "most-likely", name: "Most Likely To", description: "Vote who's most likely to...", emoji: "👆", players: "3-15", category: "party", mode: "All", color: "from-primary to-secondary" },
  { id: "speed-round", name: "Speed Round", description: "Name 5 things in 30 seconds", emoji: "⚡", players: "2-10", category: "party", mode: "Rotation", color: "from-secondary to-accent" },
  { id: "story-builder", name: "Story Builder", description: "Add one sentence at a time", emoji: "📖", players: "3-10", category: "party", mode: "Rotation", color: "from-accent to-primary" },
  { id: "true-false", name: "True or False", description: "Is it fact or fiction?", emoji: "✅", players: "1-20", category: "knowledge", mode: "All", color: "from-primary to-accent" },
  { id: "categories", name: "Categories", description: "Name items in a category, fast!", emoji: "📋", players: "2-10", category: "knowledge", mode: "Rotation", color: "from-secondary to-primary" },
  { id: "spy", name: "Spy Game", description: "Find the spy among you", emoji: "🕵️", players: "4-12", category: "party", mode: "All", color: "from-accent to-secondary" },
  { id: "music-quiz", name: "Music Quiz", description: "Name that tune!", emoji: "🎵", players: "2-10", category: "knowledge", mode: "Solo", color: "from-primary to-secondary" },
];

export const categories = ["all", "party", "knowledge", "solo", "team"] as const;
export type Category = typeof categories[number];
