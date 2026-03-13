import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { games, familyConfig, type Game, type GameFamily } from "@/data/games";
import { usePlayHubSettings } from "@/hooks/usePlayHubSettings";
import { useNavigate } from "react-router-dom";

const familyColorMap: Record<GameFamily, string> = {
  knowledge: "hsl(var(--family-knowledge))",
  party: "hsl(var(--family-party))",
  adult: "hsl(var(--family-adult))",
  solo: "hsl(var(--family-solo))",
  surprise: "hsl(var(--family-surprise))",
};

type WheelSegment = {
  family: GameFamily;
  start: number;
  end: number;
  count: number;
};

const orderedFamilies: GameFamily[] = ["knowledge", "party", "solo", "adult"];

const SurpriseWheel = () => {
  const navigate = useNavigate();
  const { adultEnabled } = usePlayHubSettings();
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<Game | null>(null);

  const availableGames = useMemo(
    () => games.filter((game) => adultEnabled || !game.isAdult),
    [adultEnabled]
  );

  const segments = useMemo<WheelSegment[]>(() => {
    const familyCounts = orderedFamilies
      .filter((family) => adultEnabled || family !== "adult")
      .map((family) => ({ family, count: availableGames.filter((game) => game.family === family).length }))
      .filter((entry) => entry.count > 0);

    const total = familyCounts.reduce((sum, entry) => sum + entry.count, 0) || 1;
    let current = 0;

    return familyCounts.map((entry) => {
      const size = (entry.count / total) * 360;
      const segment = {
        family: entry.family,
        start: current,
        end: current + size,
        count: entry.count,
      };
      current += size;
      return segment;
    });
  }, [adultEnabled, availableGames]);

  const wheelGradient = useMemo(
    () =>
      `conic-gradient(${segments
        .map((segment) => `${familyColorMap[segment.family]} ${segment.start}deg ${segment.end}deg`)
        .join(",")})`,
    [segments]
  );

  const spin = () => {
    if (spinning || segments.length === 0) return;

    setSpinning(true);
    setResult(null);

    const extraTurns = 360 * (6 + Math.floor(Math.random() * 3));
    const randomAngle = Math.random() * 360;
    const finalRotation = rotation + extraTurns + randomAngle;

    setRotation(finalRotation);

    window.setTimeout(() => {
      const pointerAngle = ((360 - (finalRotation % 360)) + 360) % 360;
      const chosenSegment = segments.find((segment) => pointerAngle >= segment.start && pointerAngle < segment.end) ?? segments[0];
      const familyPool = availableGames.filter((game) => game.family === chosenSegment.family);
      const chosenGame = familyPool[Math.floor(Math.random() * familyPool.length)] ?? availableGames[0] ?? null;

      setResult(chosenGame);
      setSpinning(false);
    }, 4800);
  };

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-display text-xl text-foreground">🎡 Surprise Me</h2>
        <Badge className="bg-primary/15 text-primary border-primary/20">
          <Sparkles className="h-3.5 w-3.5 mr-1" />
          Randomizer
        </Badge>
      </div>

      <div className="relative mx-auto w-[min(60vw,270px)] aspect-square">
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20 w-0 h-0 border-x-8 border-x-transparent border-b-[16px] border-b-primary" />

        <div
          className="absolute inset-0 rounded-full border-[10px] border-card shadow-2xl"
          style={{
            background: wheelGradient,
            transform: `rotate(${rotation}deg)`,
            transition: spinning ? "transform 4.8s cubic-bezier(0.16, 0.88, 0.3, 1.1)" : "none",
          }}
        >
          {!spinning && <div className="absolute inset-0 rounded-full animate-spin-slow" aria-hidden />}
        </div>

        <div className="absolute inset-[22%] rounded-full bg-background border border-border flex items-center justify-center text-center px-2">
          <p className="font-display text-sm text-foreground leading-tight">Spin<br />to play</p>
        </div>

        {adultEnabled && (
          <div className="absolute -inset-3 rounded-full border border-family-adult/40 pointer-events-none" />
        )}
      </div>

      <Button onClick={spin} disabled={spinning || availableGames.length === 0} className="w-full h-12 bg-gradient-primary font-display btn-3d">
        {spinning ? "Spinning..." : "Spin the Wheel"}
      </Button>

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-2xl border border-border bg-card p-4 space-y-3 ${familyConfig[result.family].borderClass}`}
        >
          <div className="flex items-center gap-2">
            <div className={`h-10 w-10 rounded-xl flex items-center justify-center text-xl ${familyConfig[result.family].bgClass}`}>{result.emoji}</div>
            <div>
              <p className="text-xs text-muted-foreground">You landed on</p>
              <p className="font-display text-foreground">{result.name}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button className="btn-3d" onClick={() => navigate(`/play/${result.id}`)}>Let's Go</Button>
            <Button variant="outline" onClick={spin}>Spin Again</Button>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default SurpriseWheel;
