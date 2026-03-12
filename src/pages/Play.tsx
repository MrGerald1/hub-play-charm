import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import GameCard from "@/components/GameCard";
import { games, categories, type Category } from "@/data/games";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Play = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered = games.filter((g) => {
    const matchesSearch = g.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "all" || g.category === activeCategory;
    return matchesSearch && matchesCategory;
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
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "px-4 py-1.5 rounded-full text-xs font-medium capitalize whitespace-nowrap transition-all",
              activeCategory === cat
                ? "bg-primary text-primary-foreground glow-primary"
                : "bg-muted text-muted-foreground hover:text-foreground"
            )}
          >
            {cat}
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
        <div className="text-center py-12 text-muted-foreground text-sm">
          No games found matching "{search}"
        </div>
      )}
    </div>
  );
};

export default Play;
