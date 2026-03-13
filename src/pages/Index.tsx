import { motion } from "framer-motion";
import { ArrowRight, Coins, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import GameCard from "@/components/GameCard";
import SurpriseWheel from "@/components/SurpriseWheel";
import { games } from "@/data/games";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import heroImage from "@/assets/playhub-hero.jpg";

const Index = () => {
  const navigate = useNavigate();
  const [roomCode, setRoomCode] = useState("");
  const featured = games.filter((g) => g.featured).slice(0, 6);

  return (
    <div className="space-y-7 pb-24">
      <section className="relative overflow-hidden">
        <img src={heroImage} alt="Friends playing party games on mobile" className="h-[46vh] w-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/10" />

        <div className="absolute inset-x-0 bottom-0 px-5 pb-6 space-y-3">
          <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl leading-none text-foreground">
            Viral party games,<br />built for phones.
          </motion.h1>
          <p className="text-sm text-foreground/90 max-w-[34ch]">Spin, vote, bluff, and roast your friends in seconds — no downloads, instant room codes.</p>

          <div className="flex gap-2 pt-1">
            <Input
              placeholder="Room code"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
              maxLength={6}
              className="flex-1 text-center font-display tracking-widest uppercase bg-background/80"
            />
            <Button onClick={() => roomCode && navigate(`/room/${roomCode}`)} disabled={roomCode.length < 4} className="btn-3d px-5">
              Join
            </Button>
          </div>

          <Button onClick={() => navigate("/play")} variant="outline" className="w-full">
            Browse All Games <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </section>

      <div className="px-5 flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-success animate-pulse-glow" />
          <span>1,240 playing now</span>
        </div>
        <div className="flex items-center gap-1">
          <Coins className="h-3.5 w-3.5 text-warning" />
          <span>Daily coin rewards live</span>
        </div>
      </div>

      <div className="px-5">
        <SurpriseWheel />
      </div>

      <section className="px-5 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl text-foreground">🔥 Featured right now</h2>
          <Button variant="link" className="p-0 h-auto" onClick={() => navigate("/play")}>See all</Button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {featured.map((game, i) => <GameCard key={game.id} game={game} index={i} featured />)}
        </div>
      </section>

      <section className="px-5 grid grid-cols-3 gap-2">
        {[
          { icon: Zap, title: "Pick", desc: "Choose any mode" },
          { icon: Users, title: "Invite", desc: "Share code instantly" },
          { icon: Coins, title: "Earn", desc: "Coins every round" },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl border border-border bg-card p-3 text-center space-y-2">
            <div className="mx-auto h-9 w-9 rounded-xl bg-primary/15 flex items-center justify-center"><Icon className="h-4 w-4 text-primary" /></div>
            <p className="font-display text-xs text-foreground">{title}</p>
            <p className="text-[10px] text-muted-foreground">{desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Index;
