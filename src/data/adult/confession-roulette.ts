export interface ConfessionPrompt {
  prompt: string;
  intensity: "light" | "medium" | "heavy";
}

export const confessionPrompts: ConfessionPrompt[] = [
  // Light
  { prompt: "Confess something petty you've done recently", intensity: "light" },
  { prompt: "Confess a habit you're secretly ashamed of", intensity: "light" },
  { prompt: "Confess the pettiest reason you've ended a friendship", intensity: "light" },
  { prompt: "Confess the most embarrassing thing you've googled", intensity: "light" },
  { prompt: "Confess the silliest reason you've cried", intensity: "light" },
  { prompt: "Confess a lie you told today", intensity: "light" },
  { prompt: "Confess the worst excuse you've used to cancel plans", intensity: "light" },
  { prompt: "Confess something you pretend to like but actually hate", intensity: "light" },
  { prompt: "Confess the most immature thing you've done as an adult", intensity: "light" },
  { prompt: "Confess a food crime you've committed", intensity: "light" },
  { prompt: "Confess the longest you've gone without showering", intensity: "light" },
  { prompt: "Confess something you do when nobody is watching", intensity: "light" },
  { prompt: "Confess the worst gift you've ever given", intensity: "light" },
  { prompt: "Confess something you're weirdly competitive about", intensity: "light" },
  { prompt: "Confess the most money you've wasted on something stupid", intensity: "light" },

  // Medium
  { prompt: "Confess a time you talked badly about someone behind their back", intensity: "medium" },
  { prompt: "Confess the most jealous you've ever been", intensity: "medium" },
  { prompt: "Confess a time you pretended to be someone you're not", intensity: "medium" },
  { prompt: "Confess the biggest rule you've broken", intensity: "medium" },
  { prompt: "Confess something that would surprise your parents about you", intensity: "medium" },
  { prompt: "Confess a time you ghosted someone and why", intensity: "medium" },
  { prompt: "Confess a friendship you ended for selfish reasons", intensity: "medium" },
  { prompt: "Confess a promise you broke and never apologized for", intensity: "medium" },
  { prompt: "Confess the worst thing you've done in a relationship", intensity: "medium" },
  { prompt: "Confess something about yourself that would change how people see you", intensity: "medium" },
  { prompt: "Confess the most manipulative thing you've ever done", intensity: "medium" },
  { prompt: "Confess a time you chose money over morals", intensity: "medium" },
  { prompt: "Confess the biggest secret you're keeping from your best friend", intensity: "medium" },
  { prompt: "Confess a time you were the toxic one in a relationship", intensity: "medium" },
  { prompt: "Confess something you've done that you know was wrong but don't regret", intensity: "medium" },

  // Heavy
  { prompt: "Confess the biggest lie you've ever told", intensity: "heavy" },
  { prompt: "Confess something you've never told anyone before", intensity: "heavy" },
  { prompt: "Confess a betrayal that still haunts you", intensity: "heavy" },
  { prompt: "Confess the worst thing you've said to someone you love", intensity: "heavy" },
  { prompt: "Confess your biggest fear about yourself", intensity: "heavy" },
  { prompt: "Confess something you've done that changed someone's life", intensity: "heavy" },
  { prompt: "Confess a time you chose yourself over someone who needed you", intensity: "heavy" },
  { prompt: "Confess the moment you realized you were wrong about something important", intensity: "heavy" },
  { prompt: "Confess the heaviest thing on your conscience right now", intensity: "heavy" },
  { prompt: "Confess something you wish you could undo", intensity: "heavy" },
];
