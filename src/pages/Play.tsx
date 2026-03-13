import { useMemo, useState } from "react";
import { Search, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import GameCard from "@/components/GameCard";
import { games, type GameFamily } from "@/data/games";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { usePlayHubSettings } from "@/hooks/usePlayHubSettings";

const familyFilters: { key: "all" | GameFamily; label: string; emoji: string }[] = [
  { key: "all", label: "All", emoji: "🎮" },
  { key: "knowledge", label: "Knowledge", emoji: "🧠" },
  { key: "party", label: "Party", emoji: "🎉" },
  { key: "solo", label: "Solo", emoji: "⚡" },
  { key: "adult", label: "18+", emoji: "😈" },
];

const Play = () => {
  const [search, setSearch] = useState("");
  const [activeFamily, setActiveFamily] = useState<"all" | GameFamily>("all");
  const { adultEnabled } = usePlayHubSettings();

  const visibleFilters = adultEnabled ? familyFilters : familyFilters.filter((family) => family.key !== "adult");

  const filteredGames = useMemo(
    () =>
      games.filter((game) => {
        if (game.isAdult && !adultEnabled) return false;
        const searchHit = `${game.name} ${game.description}`.toLowerCase().includes(search.toLowerCase());
        const familyHit = activeFamily === "all" || game.family === activeFamily;
        return searchHit && familyHit;
      }),
    [activeFamily, adultEnabled, search]
  );

  return (
    <div className="px-5 py-6 space-y-5 pb-24">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl text-foreground">Game Library</h1>
          <p className="text-sm text-muted-foreground">40+ modes, all instantly playable</p>
        </div>
        <Badge className="bg-primary/15 text-primary border-primary/20">
          <Sparkles className="h-3.5 w-3.5 mr-1" /> Full Pass
        </Badge>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search games, prompts, modes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-9 bg-muted border-border rounded-xl"
        />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {visibleFilters.map((family) => (
          <button
            key={family.key}
            onClick={() => setActiveFamily(family.key)}
            className={cn(
              "px-4 py-2 rounded-xl text-xs font-display whitespace-nowrap transition-all border",
              activeFamily === family.key
                ? "bg-primary text-primary-foreground border-primary glow-primary"
                : "bg-card text-muted-foreground border-border"
            )}
          >
            {family.emoji} {family.label}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>{filteredGames.length} games available</span>
        <span>{adultEnabled ? "18+ mode on" : "18+ mode off"}</span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {filteredGames.map((game, index) => (
          <GameCard key={game.id} game={game} index={index} />
        ))}
      </div>

      {filteredGames.length === 0 && (
        <div className="rounded-2xl border border-border bg-card p-8 text-center">
          <p className="text-muted-foreground">No games matched “{search}”.</p>
        </div>
      )}
    </div>
  );
};

export default Play;
