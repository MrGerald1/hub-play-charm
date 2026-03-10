import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";

const questions = [
  { q: "Which planet is closest to the sun?", options: ["Venus", "Mercury", "Mars", "Earth"], correct: 1 },
  { q: "How many bones in the human body?", options: ["206", "208", "204", "201"], correct: 0 },
];

const Quiz = () => {
  const [qIndex, setQIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [timer] = useState(15);
  const question = questions[qIndex];

  const handleAnswer = (i: number) => {
    setSelected(i);
    if (i === question.correct) setScore((s) => s + 100);
    setTimeout(() => {
      setSelected(null);
      setQIndex((q) => (q + 1) % questions.length);
    }, 1200);
  };

  return (
    <div className="px-5 py-6 space-y-5 min-h-[70vh] flex flex-col">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-display font-bold text-lg text-foreground">🧠 Quiz</h1>
          <p className="text-muted-foreground text-xs">Question {qIndex + 1}/{questions.length}</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="bg-warning/20 text-warning border-0 font-display">
            <Zap className="h-3 w-3 mr-1" /> {score}
          </Badge>
          <div className="w-10 h-10 rounded-full border-2 border-warning flex items-center justify-center font-display font-bold text-warning text-sm">
            {timer}
          </div>
        </div>
      </div>

      {/* Speed bar */}
      <div className="h-1 rounded-full bg-muted overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-success via-warning to-destructive"
          initial={{ width: "100%" }}
          animate={{ width: "60%" }}
        />
      </div>

      <div className="flex-1 flex flex-col justify-center space-y-6">
        <motion.div key={qIndex} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <h2 className="font-display font-bold text-xl text-foreground">{question.q}</h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-3">
          {question.options.map((opt, i) => {
            const colors = [
              "from-primary to-primary",
              "from-secondary to-secondary",
              "from-accent to-accent",
              "from-warning to-warning",
            ];
            return (
              <motion.button
                key={i}
                whileTap={{ scale: 0.95 }}
                onClick={() => selected === null && handleAnswer(i)}
                disabled={selected !== null}
                className={`p-4 rounded-xl border font-display font-bold text-sm transition-all ${
                  selected === i
                    ? i === question.correct
                      ? "border-success bg-success/20 text-success"
                      : "border-destructive bg-destructive/20 text-destructive"
                    : selected !== null && i === question.correct
                      ? "border-success bg-success/20 text-success"
                      : `border-border bg-card text-foreground hover:bg-gradient-to-br ${colors[i]} hover:bg-opacity-10`
                }`}
              >
                {opt}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Mini leaderboard */}
      <div className="rounded-xl bg-card border border-border p-3 space-y-2">
        <p className="text-[10px] text-muted-foreground uppercase tracking-wider">Leaderboard</p>
        {["You — 600", "Alex — 500", "Sam — 400"].map((entry, i) => (
          <div key={i} className={`flex items-center gap-2 text-xs ${i === 0 ? "text-primary font-bold" : "text-muted-foreground"}`}>
            <span className="w-4 text-center">{i + 1}</span>
            <span>{entry}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
