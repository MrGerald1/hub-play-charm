import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const questions = [
  { q: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], correct: 2 },
  { q: "Who painted the Mona Lisa?", options: ["Van Gogh", "Da Vinci", "Picasso", "Rembrandt"], correct: 1 },
];

const TugOfWar = () => {
  const [qIndex, setQIndex] = useState(0);
  const [ropePos, setRopePos] = useState(50);
  const [selected, setSelected] = useState<number | null>(null);
  const question = questions[qIndex];

  const handleAnswer = (i: number) => {
    setSelected(i);
    const correct = i === question.correct;
    setRopePos((p) => Math.max(0, Math.min(100, p + (correct ? 10 : -10))));
    setTimeout(() => {
      setSelected(null);
      setQIndex((q) => (q + 1) % questions.length);
    }, 1200);
  };

  return (
    <div className="px-5 py-6 space-y-6 min-h-[70vh] flex flex-col">
      <div className="flex items-center justify-between">
        <h1 className="font-display font-bold text-lg text-foreground">🪢 Tug of War</h1>
        <div className="flex gap-2">
          <Badge className="bg-primary/20 text-primary border-0 font-display">You</Badge>
          <span className="text-muted-foreground text-xs self-center">vs</span>
          <Badge className="bg-accent/20 text-accent border-0 font-display">Rival</Badge>
        </div>
      </div>

      {/* Rope visualization */}
      <div className="space-y-2">
        <div className="relative h-8 rounded-full bg-muted overflow-hidden border border-border">
          <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary/30 to-primary/5" style={{ width: `${ropePos}%` }} />
          <div className="absolute inset-y-0 right-0 bg-gradient-to-l from-accent/30 to-accent/5" style={{ width: `${100 - ropePos}%` }} />
          <motion.div
            animate={{ left: `${ropePos}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 text-xl"
          >
            🚩
          </motion.div>
        </div>
        <div className="flex justify-between text-[10px] text-muted-foreground">
          <span>Your side</span>
          <span>Their side</span>
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 flex flex-col justify-center space-y-5">
        <motion.div key={qIndex} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <p className="text-muted-foreground text-xs mb-2">Question {qIndex + 1}</p>
          <h2 className="font-display font-bold text-xl text-foreground">{question.q}</h2>
        </motion.div>

        <div className="space-y-2">
          {question.options.map((opt, i) => (
            <motion.button
              key={i}
              whileTap={{ scale: 0.98 }}
              onClick={() => selected === null && handleAnswer(i)}
              disabled={selected !== null}
              className={`w-full p-4 rounded-xl border text-left font-medium text-sm transition-all ${
                selected === i
                  ? i === question.correct
                    ? "border-success bg-success/10 text-success"
                    : "border-destructive bg-destructive/10 text-destructive"
                  : selected !== null && i === question.correct
                    ? "border-success bg-success/10 text-success"
                    : "border-border bg-card text-foreground hover:border-primary/40"
              }`}
            >
              {opt}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TugOfWar;
