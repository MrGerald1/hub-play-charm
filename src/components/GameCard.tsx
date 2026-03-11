import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { Game, familyConfig } from "@/data/games";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface GameCardProps {
  game: Game;
  index?: number;
  featured?: boolean;
}

const GameCard = ({ game, index = 0 }: GameCardProps) => {
  const navigate = useNavigate();
  const family = familyConfig[game.family];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.3 }}
      whileTap={{ scale: 0.96 }}
      onClick={() => navigate(`/play/${game.id}`)}
      className={`relative cursor-pointer rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary/40 ${family.borderClass}`}
      style={{ minHeight: 48 }}
    >
      {/* Subtle family color wash */}
      <div
        className="absolute inset-0 rounded-2xl opacity-[0.06]"
        style={{ background: `linear-gradient(135deg, ${family.color}, transparent)` }}
      />
      <div className="relative z-10">
        {/* Mascot badge + emoji */}
        <div className="flex items-center gap-2 mb-2">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
            style={{ background: `${family.color}20` }}
          >
            {game.emoji}
          </div>
          <span
            className="w-5 h-5 rounded-full flex items-center justify-center text-[10px]"
            style={{ background: `${family.color}30` }}
          >
            {family.mascotEmoji}
          </span>
        </div>
        <h3 className="font-display font-bold text-foreground text-sm leading-tight">{game.name}</h3>
        <p className="text-muted-foreground text-xs mt-1 line-clamp-1">{game.description}</p>
        <div className="flex items-center gap-2 mt-3">
          <Badge variant="secondary" className="text-[10px] px-2 py-0.5 bg-muted text-muted-foreground border-0">
            <Users className="h-3 w-3 mr-1" />
            {game.players}
          </Badge>
          <Badge variant="outline" className="text-[10px] px-2 py-0.5 border-border text-muted-foreground">
            {game.mode}
          </Badge>
          {game.is18Plus && (
            <Badge className="text-[10px] px-2 py-0.5 bg-adult/20 text-adult border-0">
              18+
            </Badge>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default GameCard;
