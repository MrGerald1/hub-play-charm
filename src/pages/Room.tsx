import { useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, Crown, Users } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { games } from "@/data/games";

const mockPlayers = [
  { name: "You (Host)", isHost: true },
  { name: "Alex", isHost: false },
  { name: "Jordan", isHost: false },
  { name: "Sam", isHost: false },
];

const Room = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const roomUrl = `${window.location.origin}/join/${code}`;
  const gamePool = useMemo(() => games.filter((game) => !game.isAdult).slice(0, 12), []);
  const [selectedGame, setSelectedGame] = useState(gamePool[0]?.id ?? "quiz");

  const copyCode = () => {
    navigator.clipboard.writeText(code || "");
    toast.success("Room code copied!");
  };

  return (
    <div className="px-5 py-6 space-y-6 pb-24">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-2">
        <p className="text-muted-foreground text-xs uppercase tracking-wider">Room Code</p>
        <div className="flex items-center justify-center gap-2">
          <h1 className="font-display text-4xl tracking-[0.3em] text-foreground">{code}</h1>
          <button onClick={copyCode} className="p-2 rounded-lg hover:bg-muted text-muted-foreground">
            <Copy className="h-4 w-4" />
          </button>
        </div>
      </motion.div>

      <div className="flex justify-center">
        <div className="bg-foreground p-3 rounded-2xl">
          <QRCodeSVG value={roomUrl} size={130} bgColor="hsl(0 0% 98%)" fgColor="hsl(var(--background))" />
        </div>
      </div>

      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-primary" />
          <h2 className="font-display text-foreground">Players ({mockPlayers.length})</h2>
        </div>
        <div className="space-y-2">
          {mockPlayers.map((player) => (
            <div key={player.name} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border">
              <div className="w-9 h-9 rounded-full bg-gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground">{player.name[0]}</div>
              <span className="font-medium text-foreground text-sm flex-1">{player.name}</span>
              {player.isHost && <Badge className="bg-warning/20 text-warning border-0 text-[10px]"><Crown className="h-3 w-3 mr-1" />Host</Badge>}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-display text-foreground">Pick game</h2>
        <div className="grid grid-cols-2 gap-2">
          {gamePool.map((game) => (
            <button
              key={game.id}
              onClick={() => setSelectedGame(game.id)}
              className={`p-3 rounded-xl border text-left transition-all ${selectedGame === game.id ? "border-primary bg-primary/10" : "border-border bg-card"}`}
            >
              <p className="text-lg">{game.emoji}</p>
              <p className="text-xs font-display text-foreground leading-tight">{game.name}</p>
            </button>
          ))}
        </div>
      </section>

      <Button onClick={() => navigate(`/play/${selectedGame}`)} className="w-full h-14 btn-3d text-lg">
        Start Full Game Flow
      </Button>
    </div>
  );
};

export default Room;
