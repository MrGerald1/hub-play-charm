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
  color: string;
  featured?: boolean;
  isAdult?: boolean;
}

export const familyConfig: Record<GameFamily, { label: string; mascot: string; colorClass: string; bgClass: string; borderClass: string }> = {
  knowledge: { label: "Knowledge", mascot: "🧠", colorClass: "text-family-knowledge", bgClass: "mascot-knowledge", borderClass: "family-knowledge" },
  party: { label: "Party", mascot: "🎉", colorClass: "text-family-party", bgClass: "mascot-party", borderClass: "family-party" },
  adult: { label: "18+", mascot: "😈", colorClass: "text-family-adult", bgClass: "mascot-adult", borderClass: "family-adult" },
  solo: { label: "Solo Skill", mascot: "⚡", colorClass: "text-family-solo", bgClass: "mascot-solo", borderClass: "family-solo" },
  surprise: { label: "Surprise Me", mascot: "🎰", colorClass: "text-family-surprise", bgClass: "mascot-surprise", borderClass: "family-surprise" },
};

export const games: Game[] = [
  // === Knowledge Family (Sky Blue) ===
  { id: "quiz", name: "Online Quiz", description: "Speed matters — fastest correct wins", emoji: "🧠", players: "2-50", category: "knowledge", family: "knowledge", mode: "Solo", color: "from-secondary to-primary", featured: true },
  { id: "tug-of-war", name: "Tug of War", description: "Answer questions, pull the rope!", emoji: "🪢", players: "2-10", category: "knowledge", family: "knowledge", mode: "1v1", color: "from-secondary to-primary", featured: true },
  { id: "flags", name: "Flags", description: "Name the country from its flag", emoji: "🏳️", players: "1-10", category: "knowledge", family: "knowledge", mode: "Solo", color: "from-secondary to-primary", featured: true },
  { id: "true-false", name: "True or False", description: "Is it fact or fiction?", emoji: "✅", players: "1-20", category: "knowledge", family: "knowledge", mode: "All", color: "from-secondary to-primary" },
  { id: "memory", name: "Memory Match", description: "Find the matching pairs", emoji: "🧩", players: "1-4", category: "knowledge", family: "knowledge", mode: "Solo", color: "from-secondary to-primary" },
  { id: "find-pair", name: "Find the Pair", description: "Match items that go together", emoji: "🔗", players: "1-6", category: "knowledge", family: "knowledge", mode: "Solo", color: "from-secondary to-primary" },
  { id: "daily-word", name: "Daily Word", description: "One word, one chance, every day", emoji: "📝", players: "1", category: "solo", family: "knowledge", mode: "Solo", color: "from-secondary to-primary", featured: true },
  { id: "word-chain", name: "Word Chain", description: "Last letter becomes first letter", emoji: "🔤", players: "2-8", category: "knowledge", family: "knowledge", mode: "Rotation", color: "from-secondary to-primary" },
  { id: "trivia-crack", name: "Trivia Crack", description: "Category-based trivia challenge", emoji: "🎯", players: "2-8", category: "knowledge", family: "knowledge", mode: "Solo", color: "from-secondary to-primary" },
  { id: "rapid-math", name: "Rapid Math", description: "Solve equations before time runs out", emoji: "🔢", players: "1-8", category: "knowledge", family: "knowledge", mode: "Solo", color: "from-secondary to-primary" },
  { id: "type-race", name: "Type Race", description: "Who can type the fastest?", emoji: "⌨️", players: "2-8", category: "knowledge", family: "knowledge", mode: "Race", color: "from-secondary to-primary" },
  { id: "grouping", name: "Grouping", description: "Sort items into the right categories", emoji: "📊", players: "1-6", category: "knowledge", family: "knowledge", mode: "Solo", color: "from-secondary to-primary" },

  // === Party Family (Fire Orange) ===
  { id: "charades", name: "Charades", description: "Act it out, no words allowed!", emoji: "🎭", players: "4-20", category: "party", family: "party", mode: "Teams", color: "from-accent to-primary", featured: true },
  { id: "taboo", name: "Taboo", description: "Describe without forbidden words", emoji: "🚫", players: "4-20", category: "party", family: "party", mode: "Teams", color: "from-accent to-primary", featured: true },
  { id: "fishbowl", name: "Fishbowl", description: "3 rounds: Describe, Act, One Word", emoji: "🐟", players: "6-20", category: "party", family: "party", mode: "Teams", color: "from-accent to-primary" },
  { id: "hot-seat", name: "Hot Seat", description: "Answer personal questions, group guesses", emoji: "🔥", players: "3-15", category: "party", family: "party", mode: "Rotation", color: "from-accent to-primary" },
  { id: "would-you-rather", name: "Would You Rather", description: "Pick your side — no in-between", emoji: "🤔", players: "2-20", category: "party", family: "party", mode: "All", color: "from-accent to-primary" },
  { id: "two-truths", name: "Two Truths & A Lie", description: "Spot the lie among truths", emoji: "🤥", players: "3-15", category: "party", family: "party", mode: "Rotation", color: "from-accent to-primary" },
  { id: "draw-guess", name: "Draw & Guess", description: "Draw it — can they guess it?", emoji: "🎨", players: "3-12", category: "party", family: "party", mode: "Rotation", color: "from-accent to-primary" },
  { id: "alias", name: "Alias", description: "Explain the word without using it", emoji: "💬", players: "4-20", category: "party", family: "party", mode: "Teams", color: "from-accent to-primary" },
  { id: "story-builder", name: "Story Builder", description: "Add one sentence at a time", emoji: "📖", players: "3-10", category: "party", family: "party", mode: "Rotation", color: "from-accent to-primary" },
  { id: "speed-round", name: "Speed Round", description: "Name 5 things in 30 seconds", emoji: "⚡", players: "2-10", category: "party", family: "party", mode: "Rotation", color: "from-accent to-primary" },
  { id: "emoji-decode", name: "Emoji Decode", description: "Guess the movie/phrase from emojis", emoji: "😎", players: "2-15", category: "party", family: "party", mode: "All", color: "from-accent to-primary" },
  { id: "never-have-i", name: "Never Have I Ever", description: "Reveal who has done what", emoji: "🙈", players: "3-20", category: "party", family: "party", mode: "All", color: "from-accent to-primary" },
  { id: "most-likely", name: "Most Likely To", description: "Vote who's most likely to...", emoji: "👆", players: "3-15", category: "party", family: "party", mode: "All", color: "from-accent to-primary" },
  { id: "this-or-that", name: "This or That", description: "Binary choices, big opinions", emoji: "⚖️", players: "2-20", category: "party", family: "party", mode: "All", color: "from-accent to-primary" },
  { id: "spy", name: "Spy Game", description: "Find the spy among you", emoji: "🕵️", players: "4-12", category: "party", family: "party", mode: "All", color: "from-accent to-primary" },
  { id: "categories", name: "Category Sprint", description: "Name items in a category, fast!", emoji: "📋", players: "2-10", category: "party", family: "party", mode: "Rotation", color: "from-accent to-primary" },
  { id: "music-quiz", name: "Name That Tune", description: "Name that tune!", emoji: "🎵", players: "2-10", category: "party", family: "party", mode: "Solo", color: "from-accent to-primary" },
  { id: "finish-lyric", name: "Finish the Lyric", description: "Complete the missing lyrics", emoji: "🎤", players: "2-10", category: "party", family: "party", mode: "All", color: "from-accent to-primary" },
  { id: "guess-price", name: "Guess the Price", description: "How much does it cost?", emoji: "💰", players: "2-10", category: "party", family: "party", mode: "All", color: "from-accent to-primary" },
  { id: "word-association", name: "Word Association", description: "Say the first word that comes to mind", emoji: "💭", players: "2-10", category: "party", family: "party", mode: "Rotation", color: "from-accent to-primary" },
  { id: "twenty-questions", name: "20 Questions vs AI", description: "Can you stump the AI in 20 questions?", emoji: "🤖", players: "1-6", category: "party", family: "party", mode: "Solo", color: "from-accent to-primary" },
  { id: "debate-roulette", name: "Debate Roulette", description: "Defend a random position", emoji: "🗣️", players: "2-8", category: "party", family: "party", mode: "1v1", color: "from-accent to-primary" },
  { id: "celebrity-couples", name: "Celebrity Couples", description: "Match the famous couples", emoji: "💑", players: "2-10", category: "party", family: "party", mode: "All", color: "from-accent to-primary" },
  { id: "acronym-game", name: "Acronym Game", description: "Make up meanings for random acronyms", emoji: "🔠", players: "3-10", category: "party", family: "party", mode: "All", color: "from-accent to-primary" },

  // === Solo Skill Family (Soft Purple) ===
  { id: "reaction-test", name: "Reaction Test", description: "Test your reflexes!", emoji: "⚡", players: "1", category: "solo", family: "solo", mode: "Solo", color: "from-primary to-secondary" },
  { id: "pattern-match", name: "Pattern Match", description: "Find the pattern before time runs out", emoji: "🔮", players: "1", category: "solo", family: "solo", mode: "Solo", color: "from-primary to-secondary" },

  // === 18+ Adult Family (Deep Rose) ===
  { id: "bad-people", name: "Bad People", description: "Vote on who fits the worst description", emoji: "😈", players: "3-10", category: "party", family: "adult", mode: "All", color: "from-destructive to-accent", isAdult: true },
  { id: "exposed", name: "Exposed", description: "Read a statement — drink if it's you", emoji: "🍺", players: "3-15", category: "party", family: "adult", mode: "All", color: "from-destructive to-accent", isAdult: true },
  { id: "dare-levels", name: "Dare Levels", description: "Mild, Medium, or Hot — you choose", emoji: "🌶️", players: "2-10", category: "party", family: "adult", mode: "Rotation", color: "from-destructive to-accent", isAdult: true },
  { id: "confession-roulette", name: "Confession Roulette", description: "Anonymous confessions, group votes", emoji: "🎡", players: "4-12", category: "party", family: "adult", mode: "All", color: "from-destructive to-accent", isAdult: true },
  { id: "spicy-truths", name: "Spicy Truths", description: "Escalating truth questions — can you handle it?", emoji: "🔥", players: "2-8", category: "party", family: "adult", mode: "Rotation", color: "from-destructive to-accent", isAdult: true },
];

export const categories = ["all", "party", "knowledge", "solo", "team"] as const;
export type Category = (typeof categories)[number];

export const families = ["all", "knowledge", "party", "solo", "adult"] as const;
export type FamilyFilter = (typeof families)[number];
