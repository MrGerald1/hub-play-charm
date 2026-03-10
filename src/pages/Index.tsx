import { motion } from "framer-motion";
import { ArrowRight, Gamepad2, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GameCard from "@/components/GameCard";
import { games } from "@/data/games";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Index = () => {
  const navigate = useNavigate();
  const [roomCode, setRoomCode] = useState("");
  const featured = games.filter((g) => g.featured);

  const steps = [
    { icon: Gamepad2, title: "Create", desc: "Pick a game & create a room" },
    { icon: Users, title: "Share", desc: "Share the code with friends" },
    { icon: Zap, title: "Play", desc: "Play together instantly" },
  ];

  return (
    <div className="px-5 py-6 pb-4 space-y-8">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4 pt-4"
      >
        <h1 className="text-3xl font-display font-bold leading-tight">
          Play Together,{" "}
          <span className="text-gradient">Anywhere</span>
        </h1>
        <p className="text-muted-foreground text-sm max-w-[280px] mx-auto">
          Party games on your phone. No downloads, no signups — just fun.
        </p>

        {/* Join / Create CTAs */}
        <div className="flex gap-2 pt-2">
          <Input
            placeholder="Room code"
            value={roomCode}
            onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
            maxLength={6}
            className="flex-1 text-center font-display font-bold tracking-widest uppercase bg-muted border-border placeholder:text-muted-foreground/50"
          />
          <Button
            onClick={() => roomCode && navigate(`/room/${roomCode}`)}
            disabled={roomCode.length < 4}
            className="bg-gradient-primary hover:opacity-90 text-primary-foreground font-display font-bold px-5"
          >
            Join
          </Button>
        </div>
        <Button
          onClick={() => navigate("/play")}
          variant="outline"
          className="w-full border-primary/30 text-primary hover:bg-primary/10 font-display"
        >
          Create a Room
          <ArrowRight className="h-4 w-4 ml-1" />
        </Button>
      </motion.section>

      {/* Active players ticker */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="flex items-center justify-center gap-2 text-xs text-muted-foreground"
      >
        <span className="h-2 w-2 rounded-full bg-success animate-pulse-glow" />
        <span>1,240 players active now</span>
      </motion.div>

      {/* Featured Games */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-display font-bold text-lg text-foreground">Featured Games</h2>
          <Button variant="link" size="sm" className="text-primary p-0 h-auto" onClick={() => navigate("/play")}>
            See all <ArrowRight className="h-3 w-3 ml-1" />
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {featured.map((game, i) => (
            <GameCard key={game.id} game={game} index={i} featured />
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="space-y-3">
        <h2 className="font-display font-bold text-lg text-foreground">How it works</h2>
        <div className="flex gap-3">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="flex-1 rounded-xl border border-border bg-card p-3 text-center space-y-2"
            >
              <div className="mx-auto w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <p className="font-display font-bold text-xs text-foreground">{title}</p>
              <p className="text-[10px] text-muted-foreground leading-tight">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;
