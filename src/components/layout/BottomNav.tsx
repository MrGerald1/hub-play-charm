import { Home, Gamepad2, PlusCircle, Trophy, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const tabs = [
  { to: "/", icon: Home, label: "Home", emoji: "🏠" },
  { to: "/play", icon: Gamepad2, label: "Play", emoji: "🎮" },
  { to: "/create", icon: PlusCircle, label: "Create", emoji: "✨" },
  { to: "/leaderboard", icon: Trophy, label: "Board", emoji: "🏆" },
  { to: "/profile", icon: User, label: "Profile", emoji: "👤" },
];

const BottomNav = () => {
  return (
    <nav className="sticky bottom-0 z-50 flex items-center justify-around border-t border-border bg-card/90 backdrop-blur-xl px-2 py-2 safe-area-pb">
      {tabs.map(({ to, icon: Icon, label }) => (
        <NavLink
          key={to}
          to={to}
          end={to === "/"}
          className={({ isActive }) =>
            cn(
              "flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all duration-200 text-muted-foreground min-w-[48px] min-h-[48px] justify-center",
              isActive && "text-primary bg-primary/10"
            )
          }
        >
          <Icon className="h-5 w-5" />
          <span className="text-[10px] font-display font-medium">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNav;
