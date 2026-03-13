import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Coins, Lock, Sparkles, Timer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { games, familyConfig } from "@/data/games";
import { triviaQuestions } from "@/data/trivia-questions";
import { emojiPuzzles } from "@/data/emoji-decode";
import { mostLikelyPrompts } from "@/data/most-likely-to";
import { speedRoundCards } from "@/data/speed-round";
import { storyStarters } from "@/data/story-builder";
import { spyLocations } from "@/data/spy-locations";
import { wordChainSeeds } from "@/data/word-chain";
import { categorySprintCards } from "@/data/category-sprint";
import { fishbowlPrompts, fishbowlRounds } from "@/data/fishbowl";
import { exposedCards } from "@/data/adult/exposed";
import { dareCards } from "@/data/adult/dare-levels";
import { confessionPrompts } from "@/data/adult/confession-roulette";
import { usePlayHubSettings } from "@/hooks/usePlayHubSettings";

const players = ["Ayo", "Kemi", "Tolu", "Mina", "Noah"];

const wouldYouRatherDeck = [
  ["Always be 10 minutes late", "Always be 20 minutes early"],
  ["Lose your phone for a week", "Lose Wi‑Fi for a week"],
  ["Sing every text", "Dance every conversation"],
  ["Unlimited games", "Unlimited snacks"],
];

const thisOrThatDeck = [
  ["Road trip", "Flight"],
  ["Coffee", "Tea"],
  ["Night out", "Game night in"],
  ["Movies", "Series"],
];

const twoTruthsDeck = [
  ["I broke my arm dancing", "I can solve a Rubik's cube blindfolded", "I hate pizza", 2],
  ["I met a celebrity at the airport", "I won a spelling bee", "I have never used TikTok", 2],
  ["I once slept through an exam", "I can play 3 instruments", "I have climbed Kilimanjaro", 2],
] as const;

const hotSeatDeck = [
  "What's one thing people always misunderstand about you?",
  "What's your most chaotic group chat moment?",
  "What's your guilty pleasure song?",
  "What's your best soft-life purchase?",
];

const neverHaveIDeck = [
  "Never have I ever sent a voice note longer than 5 minutes.",
  "Never have I ever laughed during a serious conversation.",
  "Never have I ever forgotten a close friend's birthday.",
  "Never have I ever stalked someone before meeting them.",
];

const spicyTruthsDeck = [
  "Who in this room gives the best first impression?",
  "What's one flirty text you regret sending?",
  "What's your boldest relationship red flag?",
  "What's one thing you'd never admit outside this game?",
];

const GameExperience = () => {
  const navigate = useNavigate();
  const { gameId } = useParams();
  const game = games.find((g) => g.id === gameId);
  const { adultEnabled, earnCoins, spendCoins, formattedCoins } = usePlayHubSettings();

  const [cursor, setCursor] = useState(0);
  const [input, setInput] = useState("");
  const [entries, setEntries] = useState<string[]>([]);
  const [picked, setPicked] = useState<string>("");
  const [revealed, setRevealed] = useState(false);
  const [sessionScore, setSessionScore] = useState(0);
  const [coinBurst, setCoinBurst] = useState<number | null>(null);
  const [spyMode, setSpyMode] = useState<"civilian" | "spy">("civilian");

  const reward = (amount: number) => {
    earnCoins(amount);
    setSessionScore((prev) => prev + amount);
    setCoinBurst(amount);
    window.setTimeout(() => setCoinBurst(null), 900);
  };

  const nextRound = () => {
    setCursor((prev) => prev + 1);
    setInput("");
    setEntries([]);
    setPicked("");
    setRevealed(false);
  };

  const currentTrivia = useMemo(() => triviaQuestions[cursor % triviaQuestions.length], [cursor]);
  const currentEmoji = useMemo(() => emojiPuzzles[cursor % emojiPuzzles.length], [cursor]);
  const currentMostLikely = useMemo(() => mostLikelyPrompts[cursor % mostLikelyPrompts.length], [cursor]);
  const currentSpeed = useMemo(() => speedRoundCards[cursor % speedRoundCards.length], [cursor]);
  const currentStory = useMemo(() => storyStarters[cursor % storyStarters.length], [cursor]);
  const currentSpy = useMemo(() => spyLocations[cursor % spyLocations.length], [cursor]);
  const currentWordSeed = useMemo(() => wordChainSeeds[cursor % wordChainSeeds.length], [cursor]);
  const currentCategorySprint = useMemo(() => categorySprintCards[cursor % categorySprintCards.length], [cursor]);
  const currentFishbowl = useMemo(() => fishbowlPrompts[cursor % fishbowlPrompts.length], [cursor]);
  const currentExposed = useMemo(() => exposedCards[cursor % exposedCards.length], [cursor]);
  const currentDare = useMemo(() => dareCards[cursor % dareCards.length], [cursor]);
  const currentConfession = useMemo(() => confessionPrompts[cursor % confessionPrompts.length], [cursor]);
  const currentTruthSet = useMemo(() => twoTruthsDeck[cursor % twoTruthsDeck.length], [cursor]);
  const currentWouldYouRather = useMemo(() => wouldYouRatherDeck[cursor % wouldYouRatherDeck.length], [cursor]);
  const currentThisOrThat = useMemo(() => thisOrThatDeck[cursor % thisOrThatDeck.length], [cursor]);
  const currentHotSeat = useMemo(() => hotSeatDeck[cursor % hotSeatDeck.length], [cursor]);
  const currentNeverHaveI = useMemo(() => neverHaveIDeck[cursor % neverHaveIDeck.length], [cursor]);
  const currentSpicyTruth = useMemo(() => spicyTruthsDeck[cursor % spicyTruthsDeck.length], [cursor]);

  if (!game) {
    return (
      <div className="px-5 py-6 space-y-4">
        <Button variant="outline" onClick={() => navigate("/play")}>
          Back to Games
        </Button>
        <p className="text-muted-foreground">Game not found.</p>
      </div>
    );
  }

  if (game.isAdult && !adultEnabled) {
    return (
      <div className="px-5 py-8 space-y-5 text-center">
        <div className="mx-auto h-20 w-20 rounded-3xl bg-card border border-border flex items-center justify-center">
          <Lock className="h-9 w-9 text-family-adult" />
        </div>
        <h1 className="font-display text-2xl text-foreground">18+ Content Locked</h1>
        <p className="text-sm text-muted-foreground">Enable 18+ mode in your profile settings to play this game.</p>
        <Button onClick={() => navigate("/profile")} className="btn-3d">Open Settings</Button>
      </div>
    );
  }

  const family = familyConfig[game.family];
  const truthLieIndex = currentTruthSet[3];

  const renderSurface = () => {
    switch (game.id) {
      case "quiz":
      case "tug-of-war":
      case "trivia-crack":
        return (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">{currentTrivia.question}</p>
            <div className="grid gap-2">
              {currentTrivia.options.map((option, index) => (
                <Button
                  key={option}
                  variant="outline"
                  className="justify-start"
                  onClick={() => {
                    setPicked(option);
                    if (index === currentTrivia.correct) reward(18);
                    setRevealed(true);
                  }}
                >
                  {option}
                </Button>
              ))}
            </div>
            {revealed && (
              <Badge className="bg-success/20 text-success border-0">Answer: {currentTrivia.options[currentTrivia.correct]}</Badge>
            )}
          </div>
        );

      case "emoji-decode":
        return (
          <div className="space-y-4">
            <p className="text-4xl text-center leading-tight">{currentEmoji.emojis}</p>
            <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Your guess" />
            <div className="grid grid-cols-2 gap-2">
              <Button
                className="btn-3d"
                onClick={() => {
                  const good = input.trim().toLowerCase().includes(currentEmoji.answer.toLowerCase().slice(0, 4));
                  if (good) reward(14);
                  setRevealed(true);
                }}
              >
                Check
              </Button>
              <Button variant="outline" onClick={() => setRevealed(true)}>Reveal</Button>
            </div>
            {revealed && <p className="text-sm text-muted-foreground">Answer: <span className="text-foreground font-medium">{currentEmoji.answer}</span></p>}
          </div>
        );

      case "most-likely":
      case "bad-people":
        return (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">{currentMostLikely.prompt}</p>
            <div className="grid grid-cols-2 gap-2">
              {players.map((name) => (
                <Button key={name} variant={picked === name ? "default" : "outline"} onClick={() => setPicked(name)}>
                  {name}
                </Button>
              ))}
            </div>
            <Button className="w-full btn-3d" onClick={() => { setRevealed(true); reward(10); }}>
              Reveal Top Vote
            </Button>
            {revealed && picked && <Badge className="bg-warning/20 text-warning border-0">Top vote: {picked}</Badge>}
          </div>
        );

      case "speed-round":
        return (
          <div className="space-y-4">
            <Badge className="bg-primary/15 text-primary border-primary/20"><Timer className="h-3.5 w-3.5 mr-1" />30s</Badge>
            <p className="text-sm text-muted-foreground">Name 5 items for: <span className="text-foreground font-semibold">{currentSpeed.category}</span></p>
            <div className="flex gap-2">
              <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type one answer" />
              <Button onClick={() => {
                if (!input.trim()) return;
                setEntries((prev) => [...prev, input.trim()]);
                setInput("");
                reward(2);
              }}>Add</Button>
            </div>
            <div className="flex flex-wrap gap-2">{entries.map((entry) => <Badge key={entry} variant="secondary">{entry}</Badge>)}</div>
          </div>
        );

      case "story-builder":
        return (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Starter: {currentStory.text}</p>
            <Textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add the next sentence..." rows={3} />
            <div className="grid grid-cols-2 gap-2">
              <Button onClick={() => {
                if (!input.trim()) return;
                setEntries((prev) => [...prev, input.trim()]);
                setInput("");
                reward(6);
              }}>Add Sentence</Button>
              <Button variant="outline" onClick={nextRound}>End Story</Button>
            </div>
            <div className="space-y-2">{entries.map((line, i) => <p key={i} className="text-xs text-foreground">{i + 1}. {line}</p>)}</div>
          </div>
        );

      case "spy":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <Button variant={spyMode === "civilian" ? "default" : "outline"} onClick={() => setSpyMode("civilian")}>Civilian View</Button>
              <Button variant={spyMode === "spy" ? "default" : "outline"} onClick={() => setSpyMode("spy")}>Spy View</Button>
            </div>
            <p className="text-sm text-muted-foreground">{spyMode === "spy" ? "You are the SPY. Blend in." : `Location: ${currentSpy.name}`}</p>
            <div className="space-y-2">
              {currentSpy.questionPrompts.map((prompt) => (
                <div key={prompt} className="rounded-xl border border-border bg-muted/40 p-3 text-xs text-foreground">{prompt}</div>
              ))}
            </div>
          </div>
        );

      case "word-chain":
        return (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Current word: <span className="text-foreground font-semibold">{currentWordSeed.word}</span></p>
            <p className="text-xs text-muted-foreground">Next word must start with <span className="text-foreground font-display">{currentWordSeed.endingLetter}</span></p>
            <Input value={input} onChange={(e) => setInput(e.target.value.toUpperCase())} placeholder="Type next word" />
            <Button className="w-full" onClick={() => {
              const valid = input.startsWith(currentWordSeed.endingLetter);
              if (valid) reward(12);
              setRevealed(true);
            }}>
              Submit Word
            </Button>
            {revealed && <Badge className={`${input.startsWith(currentWordSeed.endingLetter) ? "bg-success/20 text-success" : "bg-destructive/20 text-destructive"} border-0`}>{input.startsWith(currentWordSeed.endingLetter) ? "Valid chain" : "Wrong starting letter"}</Badge>}
          </div>
        );

      case "never-have-i":
        return (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">{currentNeverHaveI}</p>
            <div className="grid grid-cols-2 gap-2">
              <Button className="btn-3d-success" onClick={() => { reward(4); setPicked("I have"); }}>I Have</Button>
              <Button variant="outline" onClick={() => setPicked("I haven't")}>I Haven't</Button>
            </div>
            {picked && <Badge variant="secondary">Your response: {picked}</Badge>}
          </div>
        );

      case "would-you-rather":
        return (
          <div className="space-y-4">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Would you rather...</p>
            <div className="grid gap-2">
              {currentWouldYouRather.map((choice) => (
                <Button key={choice} variant={picked === choice ? "default" : "outline"} onClick={() => { setPicked(choice); reward(5); }}>
                  {choice}
                </Button>
              ))}
            </div>
          </div>
        );

      case "two-truths":
        return (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Pick the lie:</p>
            <div className="grid gap-2">
              {currentTruthSet.slice(0, 3).map((statement, index) => (
                <Button key={statement} variant="outline" onClick={() => {
                  setPicked(statement);
                  setRevealed(true);
                  if (index === truthLieIndex) reward(16);
                }}>{statement}</Button>
              ))}
            </div>
            {revealed && (
              <Badge className="bg-primary/15 text-primary border-0">Lie: {currentTruthSet[truthLieIndex]}</Badge>
            )}
          </div>
        );

      case "hot-seat":
        return (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Hot Seat Prompt:</p>
            <div className="rounded-xl border border-border bg-muted/40 p-4 text-foreground">{currentHotSeat}</div>
            <Textarea rows={3} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Drop your answer" />
            <Button className="w-full" onClick={() => { if (input.trim()) reward(7); setInput(""); }}>Submit Answer</Button>
          </div>
        );

      case "fishbowl":
        return (
          <div className="space-y-4">
            <Badge className="bg-secondary/20 text-secondary border-0">{fishbowlRounds[cursor % fishbowlRounds.length].name}</Badge>
            <p className="text-sm text-muted-foreground">Word: <span className="text-foreground font-semibold">{currentFishbowl.text}</span></p>
            <p className="text-xs text-muted-foreground">{fishbowlRounds[cursor % fishbowlRounds.length].rules}</p>
            <Button className="w-full" onClick={() => reward(9)}>Correct Guess</Button>
          </div>
        );

      case "categories":
        return (
          <div className="space-y-4">
            <Badge className="bg-warning/20 text-warning border-0">{currentCategorySprint.timeSeconds}s</Badge>
            <p className="text-sm text-muted-foreground">Category: <span className="text-foreground">{currentCategorySprint.category}</span></p>
            <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type a valid item" />
            <Button className="w-full" onClick={() => { if (input.trim()) reward(3); setInput(""); }}>Score Item</Button>
          </div>
        );

      case "draw-guess":
        return (
          <div className="space-y-4">
            <div className="h-40 rounded-2xl border border-dashed border-border bg-muted/30 flex items-center justify-center text-sm text-muted-foreground">
              Drawing board placeholder
            </div>
            <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Guess the drawing" />
            <Button className="w-full" onClick={() => { if (input.trim()) reward(8); setInput(""); }}>Submit Guess</Button>
          </div>
        );

      case "this-or-that":
        return (
          <div className="space-y-4">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">This or That</p>
            <div className="grid grid-cols-2 gap-2">
              {currentThisOrThat.map((choice) => (
                <Button key={choice} variant={picked === choice ? "default" : "outline"} onClick={() => { setPicked(choice); reward(4); }}>
                  {choice}
                </Button>
              ))}
            </div>
          </div>
        );

      case "exposed":
        return (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">{currentExposed.statement}</p>
            <div className="grid grid-cols-2 gap-2">
              <Button className="btn-3d-accent" onClick={() => reward(2)}>Drink 🍻</Button>
              <Button variant="outline" onClick={nextRound}>Skip</Button>
            </div>
          </div>
        );

      case "dare-levels":
        return (
          <div className="space-y-4">
            <Badge className="bg-family-adult/20 text-family-adult border-family-adult/30">{currentDare.tier.toUpperCase()}</Badge>
            <p className="text-sm text-muted-foreground">{currentDare.dare}</p>
            <div className="grid grid-cols-2 gap-2">
              <Button className="btn-3d" onClick={() => reward(11)}>Completed</Button>
              <Button variant="outline" onClick={nextRound}>New Dare</Button>
            </div>
          </div>
        );

      case "confession-roulette":
        return (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">{currentConfession.prompt}</p>
            <Textarea rows={3} value={input} onChange={(e) => setInput(e.target.value)} placeholder="Anonymous confession" />
            <Button className="w-full" onClick={() => { if (input.trim()) reward(12); setInput(""); }}>
              Submit Anonymously
            </Button>
          </div>
        );

      case "spicy-truths":
        return (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">{currentSpicyTruth}</p>
            <div className="grid grid-cols-2 gap-2">
              <Button className="btn-3d-destructive" onClick={() => reward(14)}>Answer Truth</Button>
              <Button
                variant="outline"
                onClick={() => {
                  if (spendCoins(15)) nextRound();
                }}
              >
                Pay 15 to Skip
              </Button>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Prototype flow for <span className="text-foreground">{game.name}</span>. Play quick rounds and earn coins.</p>
            <Button className="w-full btn-3d" onClick={() => reward(6)}>Complete Round</Button>
            <p className="text-xs text-muted-foreground">This game now opens its new phase-based flow directly from the catalog.</p>
          </div>
        );
    }
  };

  return (
    <div className="px-5 py-6 space-y-5 pb-28">
      <div className="flex items-center justify-between">
        <Button variant="ghost" className="px-0" onClick={() => navigate("/play")}>
          <ArrowLeft className="h-4 w-4 mr-1" /> Back
        </Button>
        <div className="flex items-center gap-2">
          <Badge className="bg-warning/20 text-warning border-0">
            <Coins className="h-3 w-3 mr-1" /> {formattedCoins}
          </Badge>
          <Badge className="bg-primary/15 text-primary border-0">+{sessionScore}</Badge>
        </div>
      </div>

      <div className={`rounded-3xl border border-border bg-card p-5 space-y-4 ${family.borderClass}`}>
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className={`h-10 w-10 rounded-xl flex items-center justify-center text-xl ${family.bgClass}`}>{game.emoji}</span>
              <Badge className={`${family.bgClass} border-0`}>{family.mascot} {family.label}</Badge>
            </div>
            <h1 className="font-display text-2xl text-foreground">{game.name}</h1>
            <p className="text-sm text-muted-foreground">{game.description}</p>
          </div>
          <Badge variant="outline" className="border-border text-muted-foreground">{game.players}</Badge>
        </div>

        {coinBurst !== null && (
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: -8 }} className="text-xs text-warning animate-coin-drop">
            +{coinBurst} coins
          </motion.div>
        )}

        {renderSurface()}

        <div className="grid grid-cols-2 gap-2 pt-2">
          <Button variant="outline" onClick={nextRound}>Next Prompt</Button>
          <Button className="btn-3d" onClick={() => navigate("/play")}>Back to Library</Button>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Live Players</p>
        <div className="flex gap-2 flex-wrap">
          {players.map((name) => (
            <Badge key={name} variant="secondary">{name}</Badge>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Viral Loop</p>
        <p className="text-sm text-foreground">Win rounds → earn coins → unlock spicy skips and flex on leaderboard.</p>
      </div>

      <Badge className="bg-primary/15 text-primary border-primary/20">
        <Sparkles className="h-3.5 w-3.5 mr-1" /> New full-phase flow active
      </Badge>
    </div>
  );
};

export default GameExperience;
