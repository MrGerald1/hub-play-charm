import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import GameCard from "@/components/GameCard";
import { games, categories, type Category, familyConfig } from "@/data/games";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const categoryLabels: Record<Category, string> = {
  all: "All Games",
  knowledge: "Knowledge",
  party: "Party",
  solo: "Solo Skill",
  adult: "18+",
};

const Play = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [show18Plus, setShow18Plus] = useState(false);

  const filtered = games.filter((g) => {
    const matchesSearch = g.name.toLowerCase().includes(search.toLowerCase());
    if (activeCategory === "adult") {
      return matchesSearch && g.is18Plus;
    }
    const matchesCategory = activeCategory === "all"
      ? (!g.is18Plus || show18Plus)
      : g.family === (activeCategory as string) || g.category === (activeCategory as string);
    return matchesSearch && matchesCategory && (!g.is18Plus || show18Plus || activeCategory === ("adult" as Category));
  });

  return (
    <div className="px-5 py-6 space-y-5">
      <div>
        <h1 className="font-display font-bold text-2xl text-foreground">Games</h1>
        <p className="text-muted-foreground text-sm">Pick a game to start playing</p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search games..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9 bg-muted border-border"
        />
      </div>

      {/* Category chips */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
        {categories.map((cat) => {
          const isAdult = cat === "adult";
          return (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                if (isAdult) setShow18Plus(true);
              }}
              className={cn(
                "px-4 py-1.5 rounded-full text-xs font-semibold capitalize whitespace-nowrap transition-all",
                activeCategory === cat
                  ? isAdult
                    ? "bg-adult text-white"
                    : "bg-primary text-primary-foreground glow-primary"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              {categoryLabels[cat]}
            </button>
          );
        })}
      </div>

      {/* Game grid */}
      <motion.div layout className="grid grid-cols-2 gap-3">
        {filtered.map((game, i) => (
          <GameCard key={game.id} game={game} index={i} />
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-muted-foreground text-sm">
          No games found matching "{search}"
        </div>
      )}
    </div>
  );
};

export default Play;
