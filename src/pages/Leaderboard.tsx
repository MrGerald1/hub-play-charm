import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Medal } from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = ["Global", "Friends", "Daily"] as const;

const mockLeaders = [
  { rank: 1, name: "ProGamer42", score: 12450, avatar: "P" },
  { rank: 2, name: "QuizMaster", score: 11200, avatar: "Q" },
  { rank: 3, name: "WordWizard", score: 10800, avatar: "W" },
  { rank: 4, name: "TriviaKing", score: 9500, avatar: "T" },
  { rank: 5, name: "BrainiacX", score: 8900, avatar: "B" },
  { rank: 6, name: "GameNinja", score: 8200, avatar: "G" },
  { rank: 7, name: "PlayChamp", score: 7600, avatar: "P" },
  { rank: 8, name: "SmartCookie", score: 7100, avatar: "S" },
  { rank: 9, name: "TopPlayer", score: 6800, avatar: "T" },
  { rank: 10, name: "WinStreak", score: 6500, avatar: "W" },
];

const podiumColors = ["from-warning to-warning", "from-muted-foreground to-muted-foreground", "from-accent to-accent"];
const podiumEmojis = ["🥇", "🥈", "🥉"];

const Leaderboard = () => {
  const [tab, setTab] = useState<typeof tabs[number]>("Global");

  return (
    <div className="px-5 py-6 space-y-5">
      <div className="flex items-center gap-2">
        <Trophy className="h-5 w-5 text-warning" />
        <h1 className="font-display font-bold text-2xl text-foreground">Leaderboard</h1>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 bg-muted rounded-xl p-1">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={cn(
              "flex-1 py-2 rounded-lg text-xs font-display font-medium transition-all",
              tab === t ? "bg-primary text-primary-foreground" : "text-muted-foreground"
            )}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Podium */}
      <div className="flex items-end justify-center gap-3 pt-4">
        {[1, 0, 2].map((i) => {
          const p = mockLeaders[i];
          return (
            <motion.div
              key={p.rank}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${podiumColors[i]} flex items-center justify-center text-lg font-bold text-background ${i === 1 ? "w-16 h-16" : ""}`}>
                {p.avatar}
              </div>
              <p className="font-display font-bold text-xs text-foreground mt-2">{p.name}</p>
              <p className="text-[10px] text-muted-foreground">{p.score.toLocaleString()}</p>
              <span className="text-lg">{podiumEmojis[i]}</span>
            </motion.div>
          );
        })}
      </div>

      {/* Full list */}
      <div className="space-y-2">
        {mockLeaders.slice(3).map((p, i) => (
          <motion.div
            key={p.rank}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.03 }}
            className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border"
          >
            <span className="w-6 text-center text-sm font-display font-bold text-muted-foreground">{p.rank}</span>
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-bold text-foreground">
              {p.avatar}
            </div>
            <span className="flex-1 text-sm font-medium text-foreground">{p.name}</span>
            <span className="text-sm font-display font-bold text-primary">{p.score.toLocaleString()}</span>
          </motion.div>
        ))}
      </div>

      {/* Personal rank pinned */}
      <div className="sticky bottom-2 p-3 rounded-xl bg-primary/10 border border-primary/30 flex items-center gap-3">
        <Medal className="h-4 w-4 text-primary" />
        <span className="w-6 text-center text-sm font-display font-bold text-primary">#24</span>
        <span className="flex-1 text-sm font-medium text-foreground">You</span>
        <span className="text-sm font-display font-bold text-primary">4,200</span>
      </div>
    </div>
  );
};

export default Leaderboard;
