import { Home, Gamepad2, PlusCircle, Trophy, User } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const tabs = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/play", icon: Gamepad2, label: "Play" },
  { to: "/create", icon: PlusCircle, label: "Create" },
  { to: "/leaderboard", icon: Trophy, label: "Board" },
  { to: "/profile", icon: User, label: "Profile" },
];

const BottomNav = () => {
  return (
    <nav className="sticky bottom-0 z-50 flex items-center justify-around border-t border-border bg-card/80 backdrop-blur-xl px-2 py-2 safe-area-pb">
      {tabs.map(({ to, icon: Icon, label }) => (
        <NavLink
          key={to}
          to={to}
          end={to === "/"}
          className={({ isActive }) =>
            cn(
              "flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all duration-200 text-muted-foreground",
              isActive && "text-primary glow-primary bg-primary/10"
            )
          }
        >
          <Icon className="h-5 w-5" />
          <span className="text-[10px] font-medium">{label}</span>
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNav;
