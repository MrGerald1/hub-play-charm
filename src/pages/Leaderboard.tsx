import { useState } from "react";
import { motion } from "framer-motion";
import { Coins, Flame, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePlayHubSettings } from "@/hooks/usePlayHubSettings";

const tabs = ["Global", "Friends", "Weekly"] as const;

const mockLeaders = [
  { rank: 1, name: "ProGamer42", score: 12450, coins: 1820, avatar: "P" },
  { rank: 2, name: "QuizMaster", score: 11200, coins: 1690, avatar: "Q" },
  { rank: 3, name: "WordWizard", score: 10800, coins: 1540, avatar: "W" },
  { rank: 4, name: "TriviaKing", score: 9500, coins: 1320, avatar: "T" },
  { rank: 5, name: "BrainiacX", score: 8900, coins: 1220, avatar: "B" },
  { rank: 6, name: "GameNinja", score: 8200, coins: 1110, avatar: "G" },
];

const Leaderboard = () => {
  const [tab, setTab] = useState<typeof tabs[number]>("Global");
  const { formattedCoins } = usePlayHubSettings();

  return (
    <div className="px-5 py-6 space-y-5 pb-24">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-warning" />
          <h1 className="font-display text-2xl text-foreground">Leaderboard</h1>
        </div>
        <div className="rounded-xl border border-border bg-card px-3 py-2 flex items-center gap-1.5 text-xs">
          <Coins className="h-3.5 w-3.5 text-warning" />
          <span className="font-display text-foreground">{formattedCoins}</span>
        </div>
      </div>

      <div className="rounded-xl bg-muted p-1 flex gap-1">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={cn("flex-1 py-2 rounded-lg text-xs font-display transition-all", tab === t ? "bg-primary text-primary-foreground" : "text-muted-foreground")}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {mockLeaders.map((leader, index) => (
          <motion.div
            key={leader.rank}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.04 }}
            className="rounded-xl border border-border bg-card p-3 flex items-center gap-3"
          >
            <div className="w-8 text-center font-display text-muted-foreground">#{leader.rank}</div>
            <div className="w-9 h-9 rounded-full bg-primary/15 text-primary flex items-center justify-center font-display">{leader.avatar}</div>
            <div className="flex-1">
              <p className="text-sm text-foreground">{leader.name}</p>
              <div className="text-[10px] text-muted-foreground flex items-center gap-1"><Flame className="h-3 w-3" /> 12-day streak</div>
            </div>
            <div className="text-right">
              <p className="font-display text-sm text-primary">{leader.score.toLocaleString()}</p>
              <p className="text-[10px] text-warning flex items-center gap-1 justify-end"><Coins className="h-3 w-3" />{leader.coins}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
