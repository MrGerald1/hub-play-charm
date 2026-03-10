import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, Upload, Sparkles, Trash2 } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const gameTypes = [
  { value: "charades", label: "🎭 Charades", fields: ["word"] },
  { value: "taboo", label: "🚫 Taboo", fields: ["word", "forbidden"] },
  { value: "quiz", label: "🧠 Quiz", fields: ["question", "options"] },
];

const Create = () => {
  const [gameType, setGameType] = useState("taboo");
  const [deckName, setDeckName] = useState("");
  const [cards, setCards] = useState([{ word: "Beach", forbidden: "Sand, Ocean, Water, Sun, Swim" }]);
  const [aiTopic, setAiTopic] = useState("");
  const [aiCount, setAiCount] = useState(20);
  const [aiGenerating, setAiGenerating] = useState(false);

  const addCard = () => setCards([...cards, { word: "", forbidden: "" }]);
  const removeCard = (i: number) => setCards(cards.filter((_, idx) => idx !== i));

  const simulateAI = () => {
    setAiGenerating(true);
    setTimeout(() => setAiGenerating(false), 3000);
  };

  return (
    <div className="px-5 py-6 space-y-5">
      <div>
        <h1 className="font-display font-bold text-2xl text-foreground">Create Deck</h1>
        <p className="text-muted-foreground text-sm">Build custom card decks for any game</p>
      </div>

      {/* Game type */}
      <div className="space-y-2">
        <label className="text-xs text-muted-foreground uppercase tracking-wider">Game Type</label>
        <Select value={gameType} onValueChange={setGameType}>
          <SelectTrigger className="bg-muted border-border">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {gameTypes.map((g) => (
              <SelectItem key={g.value} value={g.value}>{g.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Deck name */}
      <Input
        placeholder="Deck name (e.g. Movie Night)"
        value={deckName}
        onChange={(e) => setDeckName(e.target.value)}
        className="bg-muted border-border"
      />

      <Tabs defaultValue="manual" className="space-y-4">
        <TabsList className="w-full bg-muted">
          <TabsTrigger value="manual" className="flex-1 text-xs font-display">Manual</TabsTrigger>
          <TabsTrigger value="csv" className="flex-1 text-xs font-display">CSV Import</TabsTrigger>
          <TabsTrigger value="ai" className="flex-1 text-xs font-display">AI ✨</TabsTrigger>
        </TabsList>

        <TabsContent value="manual" className="space-y-3">
          {cards.map((card, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 rounded-xl bg-card border border-border space-y-3">
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-[10px] border-border text-muted-foreground">Card {i + 1}</Badge>
                <button onClick={() => removeCard(i)} className="text-muted-foreground hover:text-destructive">
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
              <Input
                placeholder="Word / Phrase"
                value={card.word}
                onChange={(e) => { const c = [...cards]; c[i].word = e.target.value; setCards(c); }}
                className="bg-muted border-border text-sm"
              />
              {gameType === "taboo" && (
                <Input
                  placeholder="Forbidden words (comma separated)"
                  value={card.forbidden}
                  onChange={(e) => { const c = [...cards]; c[i].forbidden = e.target.value; setCards(c); }}
                  className="bg-muted border-border text-sm"
                />
              )}
            </motion.div>
          ))}
          <Button variant="outline" onClick={addCard} className="w-full border-dashed border-border text-muted-foreground">
            <Plus className="h-4 w-4 mr-2" /> Add Card
          </Button>
        </TabsContent>

        <TabsContent value="csv" className="space-y-4">
          <div className="border-2 border-dashed border-border rounded-2xl p-8 text-center space-y-3">
            <Upload className="h-8 w-8 mx-auto text-muted-foreground" />
            <p className="text-sm text-muted-foreground">Drop CSV file here or tap to upload</p>
            <Button variant="outline" size="sm" className="border-border text-muted-foreground">
              Choose File
            </Button>
          </div>
          <p className="text-[10px] text-muted-foreground">Format: word, forbidden1, forbidden2, ... (one card per row)</p>
        </TabsContent>

        <TabsContent value="ai" className="space-y-4">
          <div className="p-4 rounded-xl bg-card border border-primary/20 space-y-4">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <h3 className="font-display font-bold text-sm text-foreground">AI Card Generator</h3>
            </div>
            <Input
              placeholder="Topic (e.g. 80s Movies, World Geography)"
              value={aiTopic}
              onChange={(e) => setAiTopic(e.target.value)}
              className="bg-muted border-border"
            />
            <div className="flex gap-2">
              {[10, 20, 40].map((n) => (
                <button
                  key={n}
                  onClick={() => setAiCount(n)}
                  className={`flex-1 py-2 rounded-lg text-xs font-display font-bold transition-all ${
                    aiCount === n ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {n} cards
                </button>
              ))}
            </div>
            <Button
              onClick={simulateAI}
              disabled={!aiTopic || aiGenerating}
              className="w-full bg-gradient-primary text-primary-foreground font-display font-bold"
            >
              {aiGenerating ? (
                <span className="flex items-center gap-2">
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
                    <Sparkles className="h-4 w-4" />
                  </motion.div>
                  Generating...
                </span>
              ) : (
                <>Generate ✨</>
              )}
            </Button>
            {aiGenerating && (
              <div className="space-y-2">
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: "70%" }}
                    transition={{ duration: 3 }}
                  />
                </div>
                <p className="text-[10px] text-muted-foreground text-center">Creating {aiCount} cards about "{aiTopic}"...</p>
              </div>
            )}
          </div>
        </TabsContent>
      </Tabs>

      {/* Save */}
      <Button className="w-full h-12 bg-gradient-primary text-primary-foreground font-display font-bold glow-primary">
        Save Deck
      </Button>
    </div>
  );
};

export default Create;
