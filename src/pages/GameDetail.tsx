import { useParams, useNavigate } from "react-router-dom";
import { games, familyConfig } from "@/data/games";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Users, Play } from "lucide-react";
import { motion } from "framer-motion";

const GameDetail = () => {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const game = games.find((g) => g.id === gameId);

  if (!game) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-muted-foreground space-y-2">
        <span className="text-4xl">🤷</span>
        <span>Game not found</span>
      </div>
    );
  }

  const family = familyConfig[game.family];
  const roomCode = Math.random().toString(36).substring(2, 6).toUpperCase();

  return (
    <div className="px-5 py-6 space-y-6">
      <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-muted-foreground text-sm">
        <ArrowLeft className="h-4 w-4" /> Back
      </button>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-4">
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className={`w-24 h-24 mx-auto rounded-3xl flex items-center justify-center text-5xl ${family.bgClass}`}
        >
          {game.emoji}
        </motion.div>

        <div>
          <Badge className={`text-[10px] px-2 py-0.5 border-0 font-display mb-2 ${family.bgClass}`}>
            {family.mascot} {family.label}
          </Badge>
          <h1 className="font-display font-bold text-2xl text-foreground">{game.name}</h1>
          <p className="text-muted-foreground text-sm mt-1">{game.description}</p>
        </div>

        <div className="flex items-center justify-center gap-2">
          <Badge variant="secondary" className="bg-muted text-muted-foreground border-0">
            <Users className="h-3 w-3 mr-1" /> {game.players} players
          </Badge>
          <Badge variant="outline" className="border-border text-muted-foreground">{game.mode}</Badge>
        </div>
      </motion.div>

      <div className="space-y-3">
        <Button
          onClick={() => navigate(`/room/${roomCode}`)}
          className="w-full h-14 bg-gradient-primary text-primary-foreground font-display font-bold text-lg btn-3d"
        >
          <Play className="h-5 w-5 mr-2" /> Create Room
        </Button>
        <Button
          variant="outline"
          onClick={() => navigate("/join")}
          className="w-full h-12 border-primary/30 text-primary font-display"
        >
          Join Existing Room
        </Button>
      </div>
    </div>
  );
};

export default GameDetail;
