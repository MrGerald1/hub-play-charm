export interface AdultMostLikelyCard {
  prompt: string;
  category: "relationships" | "money" | "secrets" | "nigerian";
}

export const adultMostLikelyCards: AdultMostLikelyCard[] = [
  // Relationships
  { prompt: "Most likely to have a secret crush on someone in this room", category: "relationships" },
  { prompt: "Most likely to slide into a celebrity's DMs", category: "relationships" },
  { prompt: "Most likely to date two people at once", category: "relationships" },
  { prompt: "Most likely to get caught checking out someone", category: "relationships" },
  { prompt: "Most likely to have a rebound relationship", category: "relationships" },
  { prompt: "Most likely to have an ex they still text", category: "relationships" },
  { prompt: "Most likely to propose on the first date", category: "relationships" },
  { prompt: "Most likely to fall for someone unavailable", category: "relationships" },
  { prompt: "Most likely to write a love poem at 3am", category: "relationships" },
  { prompt: "Most likely to have the worst pickup lines", category: "relationships" },
  { prompt: "Most likely to stalk an ex on social media", category: "relationships" },
  { prompt: "Most likely to catch feelings from a one-night stand", category: "relationships" },
  { prompt: "Most likely to bring up their body count", category: "relationships" },
  { prompt: "Most likely to drunk-text their ex", category: "relationships" },
  { prompt: "Most likely to be a serial situationship person", category: "relationships" },

  // Money
  { prompt: "Most likely to borrow money and forget about it", category: "money" },
  { prompt: "Most likely to finesse a free meal", category: "money" },
  { prompt: "Most likely to flex on Instagram while broke", category: "money" },
  { prompt: "Most likely to gamble their rent money", category: "money" },
  { prompt: "Most likely to have a sugar daddy/mommy", category: "money" },
  { prompt: "Most likely to start a Ponzi scheme", category: "money" },
  { prompt: "Most likely to split the bill to the exact cent", category: "money" },
  { prompt: "Most likely to buy designer fakes", category: "money" },
  { prompt: "Most likely to lie about their salary", category: "money" },
  { prompt: "Most likely to spend their savings on a trip", category: "money" },
  { prompt: "Most likely to ask for a refund on a date", category: "money" },
  { prompt: "Most likely to pretend their card declined", category: "money" },

  // Secrets
  { prompt: "Most likely to have a secret social media account", category: "secrets" },
  { prompt: "Most likely to have lied about something today", category: "secrets" },
  { prompt: "Most likely to have a secret talent nobody knows", category: "secrets" },
  { prompt: "Most likely to read other people's messages when they're not looking", category: "secrets" },
  { prompt: "Most likely to have a secret they'll take to the grave", category: "secrets" },
  { prompt: "Most likely to pretend to be asleep to avoid something", category: "secrets" },
  { prompt: "Most likely to have a fake excuse ready for any situation", category: "secrets" },
  { prompt: "Most likely to have done something they'll never admit", category: "secrets" },
  { prompt: "Most likely to know everyone's business", category: "secrets" },
  { prompt: "Most likely to have a hidden diary", category: "secrets" },

  // Nigerian-Specific
  { prompt: "Most likely to say 'I'm almost there' while still at home", category: "nigerian" },
  { prompt: "Most likely to eat someone else's food from the fridge", category: "nigerian" },
  { prompt: "Most likely to argue about jollof rice for 30 minutes", category: "nigerian" },
  { prompt: "Most likely to pretend they don't understand pidgin", category: "nigerian" },
  { prompt: "Most likely to price something at the market for 3 hours", category: "nigerian" },
  { prompt: "Most likely to bring Tupperware to a party", category: "nigerian" },
  { prompt: "Most likely to claim they cooked when they bought food", category: "nigerian" },
  { prompt: "Most likely to use 'my people' as an excuse for everything", category: "nigerian" },
  { prompt: "Most likely to have jollof rice at their funeral", category: "nigerian" },
  { prompt: "Most likely to send a voice note that's 5 minutes long", category: "nigerian" },
  { prompt: "Most likely to blame traffic for being 2 hours late", category: "nigerian" },
  { prompt: "Most likely to form 'ajebo' when they're actually 'ajepako'", category: "nigerian" },
  { prompt: "Most likely to use their African parent's slippers as a threat", category: "nigerian" },
];
