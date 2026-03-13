import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import GameCard from "@/components/GameCard";
import { games, familyConfig, type GameFamily } from "@/data/games";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const familyFilters: { key: "all" | GameFamily; label: string; emoji: string }[] = [
  { key: "all", label: "All", emoji: "🎮" },
  { key: "knowledge", label: "Knowledge", emoji: "🧠" },
  { key: "party", label: "Party", emoji: "🎉" },
  { key: "solo", label: "Solo Skill", emoji: "⚡" },
  { key: "adult", label: "18+", emoji: "😈" },
];

const Play = () => {
  const [search, setSearch] = useState("");
  const [activeFamily, setActiveFamily] = useState<"all" | GameFamily>("all");
  const [adultEnabled] = useState(() => localStorage.getItem("playhub_18plus") === "true");

  const filtered = games.filter((g) => {
    if (g.isAdult && !adultEnabled) return false;
    const matchesSearch = g.name.toLowerCase().includes(search.toLowerCase());
    const matchesFamily = activeFamily === "all" || g.family === activeFamily;
    return matchesSearch && matchesFamily;
  });

  const visibleFilters = adultEnabled ? familyFilters : familyFilters.filter((f) => f.key !== "adult");

  return (
    <div className="px-5 py-6 space-y-5">
      <div>
        <h1 className="font-display font-bold text-2xl text-foreground">🎮 Games</h1>
        <p className="text-muted-foreground text-sm">Pick a game to start playing</p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search games..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9 bg-muted border-border rounded-xl"
        />
      </div>

      {/* Family filter chips */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
        {visibleFilters.map((fam) => (
          <button
            key={fam.key}
            onClick={() => setActiveFamily(fam.key)}
            className={cn(
              "px-4 py-2 rounded-xl text-xs font-display font-medium capitalize whitespace-nowrap transition-all flex items-center gap-1.5",
              activeFamily === fam.key
                ? "bg-primary text-primary-foreground glow-primary"
                : "bg-muted text-muted-foreground hover:text-foreground"
            )}
          >
            <span>{fam.emoji}</span>
            {fam.label}
          </button>
        ))}
      </div>

      {/* Game grid */}
      <motion.div layout className="grid grid-cols-2 gap-3">
        {filtered.map((game, i) => (
          <GameCard key={game.id} game={game} index={i} />
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-12 space-y-2">
          <div className="text-4xl">🔍</div>
          <p className="text-muted-foreground text-sm">No games found matching "{search}"</p>
        </div>
      )}
    </div>
  );
};

export default Play;
