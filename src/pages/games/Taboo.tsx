import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, SkipForward, AlertTriangle, Eye, Mic } from "lucide-react";

type Role = "describer" | "opponent" | "team";

const cards = [
  { word: "Beach", forbidden: ["Sand", "Ocean", "Water", "Sun", "Swim"] },
  { word: "Pizza", forbidden: ["Cheese", "Italian", "Dough", "Oven", "Slice"] },
  { word: "Guitar", forbidden: ["String", "Music", "Play", "Band", "Rock"] },
];

const Taboo = () => {
  const [role, setRole] = useState<Role>("describer");
  const [cardIndex, setCardIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer] = useState(90);
  const card = cards[cardIndex];

  const handleCorrect = () => {
    setScore((s) => s + 1);
    setCardIndex((i) => (i + 1) % cards.length);
  };

  const roles: { key: Role; label: string; icon: any }[] = [
    { key: "describer", label: "Describer", icon: Mic },
    { key: "opponent", label: "Opponent", icon: AlertTriangle },
    { key: "team", label: "Team", icon: Eye },
  ];

  return (
    <div className="px-5 py-6 space-y-5 min-h-[70vh] flex flex-col">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-lg text-foreground">🚫 Taboo</h1>
          <p className="text-muted-foreground text-xs">Team A describing</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="bg-primary/20 text-primary border-0 font-display">{score} pts</Badge>
          <div className="w-10 h-10 rounded-full border-2 border-accent flex items-center justify-center font-display font-bold text-accent text-sm">
            {timer}
          </div>
        </div>
      </div>

      {/* Role toggle */}
      <div className="flex gap-1 bg-muted rounded-xl p-1">
        {roles.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setRole(key)}
            className={`flex-1 py-2 rounded-lg text-[10px] font-medium transition-all flex items-center justify-center gap-1 ${
              role === key ? "bg-primary text-primary-foreground" : "text-muted-foreground"
            }`}
          >
            <Icon className="h-3 w-3" /> {label}
          </button>
        ))}
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {role === "describer" ? (
            <motion.div
              key={`desc-${cardIndex}`}
              initial={{ opacity: 0, rotateY: 90 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: -90 }}
              className="w-full space-y-4"
            >
              <div className="rounded-2xl bg-card border border-border p-6 text-center glow-secondary">
                <h2 className="font-display font-bold text-3xl text-foreground mb-4">{card.word}</h2>
                <div className="space-y-1.5">
                  {card.forbidden.map((w) => (
                    <div key={w} className="py-1.5 px-3 rounded-lg bg-destructive/10 text-destructive text-sm font-medium">
                      ✕ {w}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : role === "opponent" ? (
            <motion.div key="opponent" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-6 w-full">
              <p className="text-muted-foreground text-sm">Listen carefully for forbidden words!</p>
              <Button className="w-full h-24 rounded-2xl bg-destructive text-destructive-foreground font-display font-bold text-2xl glow-accent">
                BUZZ 🔴
              </Button>
              <p className="text-muted-foreground text-xs">Tap if they say a forbidden word (-1 pt)</p>
            </motion.div>
          ) : (
            <motion.div key="team" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-4">
              <div className="text-5xl">💪</div>
              <h2 className="font-display font-bold text-xl text-foreground">Your team is describing!</h2>
              <p className="text-muted-foreground text-sm">Listen and guess the word</p>
              <div className="mt-4 p-4 rounded-xl bg-card border border-border">
                <p className="text-muted-foreground text-xs">Time remaining</p>
                <p className="font-display font-bold text-3xl text-foreground">{timer}s</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {role === "describer" && (
        <div className="flex gap-3">
          <Button variant="outline" onClick={() => setCardIndex((i) => (i + 1) % cards.length)} className="flex-1 h-14 border-border text-muted-foreground font-display">
            <SkipForward className="h-4 w-4 mr-2" /> Skip
          </Button>
          <Button onClick={handleCorrect} className="flex-[2] h-14 bg-success text-primary-foreground font-display font-bold text-lg">
            <Check className="h-5 w-5 mr-2" /> Correct ✓
          </Button>
        </div>
      )}
    </div>
  );
};

export default Taboo;
