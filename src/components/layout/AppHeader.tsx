import { Coins, Flame, ShieldAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { usePlayHubSettings } from "@/hooks/usePlayHubSettings";

const AppHeader = () => {
  const navigate = useNavigate();
  const { formattedCoins, adultEnabled } = usePlayHubSettings();

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="px-4 py-3 flex items-center justify-between">
        <button onClick={() => navigate("/")} className="text-left">
          <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">PlayHub</p>
          <h1 className="font-display text-xl text-foreground leading-none">Party Engine</h1>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate("/leaderboard")}
            className="h-10 px-3 rounded-xl border border-border bg-card flex items-center gap-1.5"
          >
            <Flame className="h-4 w-4 text-warning" />
            <span className="text-xs font-display text-foreground">12</span>
          </button>

          <button
            onClick={() => navigate("/profile")}
            className="h-10 px-3 rounded-xl border border-border bg-card flex items-center gap-1.5"
          >
            <Coins className="h-4 w-4 text-warning" />
            <span className="text-xs font-display text-foreground">{formattedCoins}</span>
          </button>

          {adultEnabled && (
            <button
              onClick={() => navigate("/profile")}
              className="h-10 px-2 rounded-xl border border-family-adult/40 bg-card flex items-center justify-center"
              aria-label="18 plus mode enabled"
            >
              <ShieldAlert className="h-4 w-4 text-family-adult" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
