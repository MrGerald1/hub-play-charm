import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "@/components/layout/AppLayout";
import MobileShell from "@/components/layout/MobileShell";
import Index from "./pages/Index";
import Play from "./pages/Play";
import GameDetail from "./pages/GameDetail";
import Join from "./pages/Join";
import Room from "./pages/Room";
import Create from "./pages/Create";
import Leaderboard from "./pages/Leaderboard";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import Charades from "./pages/games/Charades";
import Taboo from "./pages/games/Taboo";
import TugOfWar from "./pages/games/TugOfWar";
import Quiz from "./pages/games/Quiz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Main app with bottom nav */}
          <Route element={<AppLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/play" element={<Play />} />
            <Route path="/play/:gameId" element={<GameDetail />} />
            <Route path="/create" element={<Create />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          {/* Standalone pages wrapped in shell */}
          <Route path="/join" element={<MobileShell><Join /></MobileShell>} />
          <Route path="/join/:code" element={<MobileShell><Join /></MobileShell>} />
          <Route path="/room/:code" element={<MobileShell><Room /></MobileShell>} />
          <Route path="/room/:code/game/charades" element={<MobileShell><Charades /></MobileShell>} />
          <Route path="/room/:code/game/taboo" element={<MobileShell><Taboo /></MobileShell>} />
          <Route path="/room/:code/game/tug-of-war" element={<MobileShell><TugOfWar /></MobileShell>} />
          <Route path="/room/:code/game/quiz" element={<MobileShell><Quiz /></MobileShell>} />
          <Route path="/auth" element={<MobileShell><Auth /></MobileShell>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
