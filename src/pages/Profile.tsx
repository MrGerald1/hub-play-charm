import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Coins, Flame, LogIn, Settings2, ShieldAlert, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { usePlayHubSettings } from "@/hooks/usePlayHubSettings";

const Profile = () => {
  const navigate = useNavigate();
  const { formattedCoins, adultEnabled, setAdultEnabled } = usePlayHubSettings();
  const [pendingAdultToggle, setPendingAdultToggle] = useState(false);

  return (
    <div className="px-5 py-6 space-y-6 pb-24">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl border border-border bg-card p-5 space-y-4">
        <div className="flex items-center gap-3">
          <div className="h-16 w-16 rounded-2xl bg-gradient-primary flex items-center justify-center text-2xl font-display text-primary-foreground">G</div>
          <div>
            <h1 className="font-display text-2xl text-foreground">Guest Player</h1>
            <div className="flex items-center gap-2 mt-1">
              <Badge className="bg-warning/20 text-warning border-0"><Flame className="h-3 w-3 mr-1" />12 day streak</Badge>
              <Badge variant="secondary">Starter tier</Badge>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-xl border border-border bg-muted/40 p-3 text-center">
            <Coins className="h-4 w-4 mx-auto text-warning" />
            <p className="font-display text-foreground">{formattedCoins}</p>
            <p className="text-[10px] text-muted-foreground">Coins</p>
          </div>
          <div className="rounded-xl border border-border bg-muted/40 p-3 text-center">
            <Trophy className="h-4 w-4 mx-auto text-primary" />
            <p className="font-display text-foreground">#24</p>
            <p className="text-[10px] text-muted-foreground">Rank</p>
          </div>
          <div className="rounded-xl border border-border bg-muted/40 p-3 text-center">
            <Flame className="h-4 w-4 mx-auto text-warning" />
            <p className="font-display text-foreground">47</p>
            <p className="text-[10px] text-muted-foreground">Games</p>
          </div>
        </div>

        <Button onClick={() => navigate("/auth")} className="w-full btn-3d">
          <LogIn className="h-4 w-4 mr-2" /> Sign in to sync progress
        </Button>
      </motion.div>

      <section className="rounded-3xl border border-border bg-card p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-display text-lg text-foreground">Content Controls</h2>
            <p className="text-xs text-muted-foreground">Manage family-safe and 18+ game visibility.</p>
          </div>
          <Settings2 className="h-4 w-4 text-muted-foreground" />
        </div>

        <div className="rounded-2xl border border-border p-4 flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm text-foreground flex items-center gap-1"><ShieldAlert className="h-4 w-4 text-family-adult" /> 18+ Adult Games</p>
            <p className="text-xs text-muted-foreground">Unlock Exposed, Dare Levels, Confession Roulette, and Spicy Truths.</p>
          </div>
          <Switch
            checked={adultEnabled}
            onCheckedChange={(checked) => {
              if (checked && !adultEnabled) {
                setPendingAdultToggle(true);
              } else {
                setAdultEnabled(false);
              }
            }}
          />
        </div>
      </section>

      <AlertDialog open={pendingAdultToggle} onOpenChange={setPendingAdultToggle}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Enable 18+ content?</AlertDialogTitle>
            <AlertDialogDescription>
              This unlocks adult party decks and includes mature prompts.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                setAdultEnabled(true);
                setPendingAdultToggle(false);
              }}
            >
              I am 18+
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Profile;
