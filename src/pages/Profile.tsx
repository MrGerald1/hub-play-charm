import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LogIn, Flame, Trophy, Gamepad2, Crown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const stats = [
  { label: "Games Played", value: "47", icon: Gamepad2 },
  { label: "Win Rate", value: "68%", icon: Trophy },
  { label: "Day Streak", value: "12", icon: Flame },
  { label: "Best Score", value: "2,450", icon: Crown },
];

const recentGames = [
  { game: "🎭 Charades", result: "Won", score: 450, date: "Today" },
  { game: "🧠 Quiz", result: "3rd", score: 280, date: "Yesterday" },
  { game: "🚫 Taboo", result: "Won", score: 520, date: "2 days ago" },
];

const Profile = () => {
  const navigate = useNavigate();

  return (
    <div className="px-5 py-6 space-y-6">
      {/* Avatar & name */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center text-2xl font-display font-bold text-primary-foreground">
          G
        </div>
        <div>
          <h1 className="font-display font-bold text-xl text-foreground">Guest Player</h1>
          <div className="flex items-center gap-2 mt-1">
            <Badge className="bg-muted text-muted-foreground border-0 text-[10px]">Free Tier</Badge>
            <Badge className="bg-warning/20 text-warning border-0 text-[10px]">
              <Flame className="h-3 w-3 mr-0.5" /> 12 day streak
            </Badge>
          </div>
        </div>
      </motion.div>

      {/* Sign in CTA */}
      <Button
        onClick={() => navigate("/auth")}
        className="w-full bg-gradient-primary text-primary-foreground font-display font-bold"
      >
        <LogIn className="h-4 w-4 mr-2" /> Sign in to save progress
      </Button>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3">
        {stats.map(({ label, value, icon: Icon }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="p-4 rounded-xl bg-card border border-border text-center space-y-1"
          >
            <Icon className="h-4 w-4 mx-auto text-primary" />
            <p className="font-display font-bold text-xl text-foreground">{value}</p>
            <p className="text-[10px] text-muted-foreground">{label}</p>
          </motion.div>
        ))}
      </div>

      {/* Recent games */}
      <section className="space-y-3">
        <h2 className="font-display font-bold text-foreground">Recent Games</h2>
        {recentGames.map((g, i) => (
          <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border">
            <span className="text-lg">{g.game.split(" ")[0]}</span>
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">{g.game.split(" ").slice(1).join(" ")}</p>
              <p className="text-[10px] text-muted-foreground">{g.date}</p>
            </div>
            <Badge className={`border-0 text-[10px] ${g.result === "Won" ? "bg-success/20 text-success" : "bg-muted text-muted-foreground"}`}>
              {g.result}
            </Badge>
            <span className="text-xs font-display font-bold text-primary">{g.score}</span>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Profile;
