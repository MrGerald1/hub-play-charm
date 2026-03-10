import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { Game } from "@/data/games";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface GameCardProps {
  game: Game;
  index?: number;
  featured?: boolean;
}

const GameCard = ({ game, index = 0, featured = false }: GameCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => navigate(`/play/${game.id}`)}
      className={`relative cursor-pointer rounded-2xl border border-border bg-card p-4 transition-all hover:border-primary/40 hover:glow-primary ${featured ? "col-span-1" : ""}`}
    >
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${game.color} opacity-[0.06]`} />
      <div className="relative z-10">
        <div className="text-3xl mb-2">{game.emoji}</div>
        <h3 className="font-display font-bold text-foreground text-sm">{game.name}</h3>
        <p className="text-muted-foreground text-xs mt-1 line-clamp-1">{game.description}</p>
        <div className="flex items-center gap-2 mt-3">
          <Badge variant="secondary" className="text-[10px] px-2 py-0.5 bg-muted text-muted-foreground border-0">
            <Users className="h-3 w-3 mr-1" />
            {game.players}
          </Badge>
          <Badge variant="outline" className="text-[10px] px-2 py-0.5 border-border text-muted-foreground">
            {game.mode}
          </Badge>
        </div>
      </div>
    </motion.div>
  );
};

export default GameCard;
