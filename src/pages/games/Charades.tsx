import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, SkipForward, Eye, Theater } from "lucide-react";

type Role = "actor" | "watcher";

const words = ["Elephant", "Astronaut", "Pizza Delivery", "Surfing", "Robot"];

const Charades = () => {
  const [role, setRole] = useState<Role>("actor");
  const [wordIndex, setWordIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timer] = useState(60);

  const handleCorrect = () => {
    setScore((s) => s + 1);
    setWordIndex((i) => (i + 1) % words.length);
  };

  return (
    <div className="px-5 py-6 space-y-5 min-h-[70vh] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-lg text-foreground">🎭 Charades</h1>
          <p className="text-muted-foreground text-xs">Team A's turn</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="bg-primary/20 text-primary border-0 font-display">{score} pts</Badge>
          <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center font-display font-bold text-primary text-sm">
            {timer}
          </div>
        </div>
      </div>

      {/* Role toggle (demo) */}
      <div className="flex gap-2 bg-muted rounded-xl p-1">
        <button
          onClick={() => setRole("actor")}
          className={`flex-1 py-2 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-1 ${
            role === "actor" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
          }`}
        >
          <Theater className="h-3 w-3" /> Actor View
        </button>
        <button
          onClick={() => setRole("watcher")}
          className={`flex-1 py-2 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-1 ${
            role === "watcher" ? "bg-primary text-primary-foreground" : "text-muted-foreground"
          }`}
        >
          <Eye className="h-3 w-3" /> Watcher View
        </button>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          {role === "actor" ? (
            <motion.div
              key={`actor-${wordIndex}`}
              initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotateY: -90 }}
              className="text-center space-y-6 w-full"
            >
              <p className="text-muted-foreground text-xs uppercase tracking-wider">Act this out!</p>
              <div className="rounded-2xl bg-card border border-border p-8 glow-primary">
                <h2 className="font-display font-bold text-3xl text-foreground">{words[wordIndex]}</h2>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="watcher"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center space-y-4"
            >
              <div className="text-6xl animate-pulse-glow">🤔</div>
              <h2 className="font-display font-bold text-xl text-foreground">Guess what they're miming!</h2>
              <p className="text-muted-foreground text-sm">Watch the actor and guess the word</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Action buttons (actor only) */}
      {role === "actor" && (
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={() => setWordIndex((i) => (i + 1) % words.length)}
            className="flex-1 h-14 border-border text-muted-foreground font-display"
          >
            <SkipForward className="h-4 w-4 mr-2" /> Skip
          </Button>
          <Button
            onClick={handleCorrect}
            className="flex-[2] h-14 bg-success text-primary-foreground font-display font-bold text-lg"
          >
            <Check className="h-5 w-5 mr-2" /> Got It ✓
          </Button>
        </div>
      )}
    </div>
  );
};

export default Charades;
