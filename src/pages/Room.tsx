import { useParams, useNavigate } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, Crown, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

const mockPlayers = [
  { name: "You (Host)", isHost: true },
  { name: "Alex", isHost: false },
  { name: "Jordan", isHost: false },
  { name: "Sam", isHost: false },
];

const Room = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const [selectedGame, setSelectedGame] = useState("charades");
  const roomUrl = `${window.location.origin}/join/${code}`;

  const copyCode = () => {
    navigator.clipboard.writeText(code || "");
    toast.success("Room code copied!");
  };

  return (
    <div className="px-5 py-6 space-y-6">
      {/* Room code header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-2">
        <p className="text-muted-foreground text-xs uppercase tracking-wider">Room Code</p>
        <div className="flex items-center justify-center gap-2">
          <h1 className="font-display font-bold text-4xl tracking-[0.3em] text-foreground">{code}</h1>
          <button onClick={copyCode} className="p-2 rounded-lg hover:bg-muted text-muted-foreground">
            <Copy className="h-4 w-4" />
          </button>
        </div>
      </motion.div>

      {/* QR Code */}
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="flex justify-center">
        <div className="bg-foreground p-3 rounded-2xl">
          <QRCodeSVG value={roomUrl} size={140} bgColor="hsl(240, 10%, 95%)" fgColor="hsl(240, 20%, 4%)" />
        </div>
      </motion.div>

      {/* Players */}
      <section className="space-y-3">
        <div className="flex items-center gap-2">
          <Users className="h-4 w-4 text-primary" />
          <h2 className="font-display font-bold text-foreground">Players ({mockPlayers.length})</h2>
        </div>
        <div className="space-y-2">
          {mockPlayers.map((player, i) => (
            <motion.div
              key={player.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + i * 0.05 }}
              className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground">
                {player.name[0]}
              </div>
              <span className="font-medium text-foreground text-sm flex-1">{player.name}</span>
              {player.isHost && (
                <Badge className="bg-warning/20 text-warning border-0 text-[10px]">
                  <Crown className="h-3 w-3 mr-1" /> Host
                </Badge>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Game select */}
      <section className="space-y-3">
        <h2 className="font-display font-bold text-foreground">Game</h2>
        <div className="grid grid-cols-3 gap-2">
          {["charades", "taboo", "quiz"].map((g) => (
            <button
              key={g}
              onClick={() => setSelectedGame(g)}
              className={`p-3 rounded-xl border text-center text-xs font-display font-bold capitalize transition-all ${
                selectedGame === g ? "border-primary bg-primary/10 text-primary glow-primary" : "border-border bg-card text-muted-foreground"
              }`}
            >
              {g === "charades" ? "🎭" : g === "taboo" ? "🚫" : "🧠"}
              <br />
              {g}
            </button>
          ))}
        </div>
      </section>

      {/* Start button */}
      <Button
        onClick={() => navigate(`/room/${code}/game/${selectedGame}`)}
        className="w-full h-14 bg-gradient-primary text-primary-foreground font-display font-bold text-lg glow-primary"
      >
        Start Game
      </Button>
    </div>
  );
};

export default Room;
