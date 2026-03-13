export interface MostLikelyPrompt {
  prompt: string;
  edition: "standard" | "nigerian" | "friends" | "couples";
}

export const mostLikelyPrompts: MostLikelyPrompt[] = [
  // Standard
  { prompt: "Most likely to become famous", edition: "standard" },
  { prompt: "Most likely to survive a zombie apocalypse", edition: "standard" },
  { prompt: "Most likely to go viral on TikTok", edition: "standard" },
  { prompt: "Most likely to cry during a movie", edition: "standard" },
  { prompt: "Most likely to forget someone's birthday", edition: "standard" },
  { prompt: "Most likely to become a millionaire", edition: "standard" },
  { prompt: "Most likely to eat something off the floor", edition: "standard" },
  { prompt: "Most likely to talk to a stranger", edition: "standard" },
  { prompt: "Most likely to get lost in their own city", edition: "standard" },
  { prompt: "Most likely to win a reality TV show", edition: "standard" },
  { prompt: "Most likely to become president", edition: "standard" },
  { prompt: "Most likely to laugh at the wrong time", edition: "standard" },
  { prompt: "Most likely to adopt 10 cats", edition: "standard" },
  { prompt: "Most likely to skip leg day", edition: "standard" },
  { prompt: "Most likely to start a podcast", edition: "standard" },
  { prompt: "Most likely to sleep through an earthquake", edition: "standard" },
  { prompt: "Most likely to get a tattoo on impulse", edition: "standard" },
  { prompt: "Most likely to become a chef", edition: "standard" },
  { prompt: "Most likely to date a celebrity", edition: "standard" },
  { prompt: "Most likely to win an argument with their parents", edition: "standard" },
  { prompt: "Most likely to live in another country", edition: "standard" },
  { prompt: "Most likely to go bungee jumping", edition: "standard" },
  { prompt: "Most likely to be late to their own wedding", edition: "standard" },
  { prompt: "Most likely to start a business", edition: "standard" },
  { prompt: "Most likely to ghost someone", edition: "standard" },
  { prompt: "Most likely to become a meme", edition: "standard" },
  { prompt: "Most likely to win a dance battle", edition: "standard" },
  { prompt: "Most likely to accidentally send a text to the wrong person", edition: "standard" },
  { prompt: "Most likely to binge-watch a show in one sitting", edition: "standard" },
  { prompt: "Most likely to get arrested for something silly", edition: "standard" },
  { prompt: "Most likely to survive on a deserted island", edition: "standard" },
  { prompt: "Most likely to write a book", edition: "standard" },
  { prompt: "Most likely to forget their phone at home", edition: "standard" },
  { prompt: "Most likely to become a YouTuber", edition: "standard" },
  { prompt: "Most likely to marry their high school crush", edition: "standard" },
  { prompt: "Most likely to eat the spiciest food", edition: "standard" },
  { prompt: "Most likely to trip on stage", edition: "standard" },
  { prompt: "Most likely to pull an all-nighter for fun", edition: "standard" },
  { prompt: "Most likely to win a karaoke competition", edition: "standard" },
  { prompt: "Most likely to live to 100", edition: "standard" },

  // Nigerian Edition
  { prompt: "Most likely to shout 'Up NEPA!'", edition: "nigerian" },
  { prompt: "Most likely to finish a whole pot of jollof alone", edition: "nigerian" },
  { prompt: "Most likely to bargain at Shoprite", edition: "nigerian" },
  { prompt: "Most likely to say 'I'm on my way' while still in bed", edition: "nigerian" },
  { prompt: "Most likely to form 'big boy/girl' with the last ₦500", edition: "nigerian" },
  { prompt: "Most likely to know all the latest Amapiano songs", edition: "nigerian" },
  { prompt: "Most likely to fight over the last piece of meat", edition: "nigerian" },
  { prompt: "Most likely to start a WhatsApp broadcast", edition: "nigerian" },
  { prompt: "Most likely to pretend they don't understand Yoruba/Igbo/Hausa", edition: "nigerian" },
  { prompt: "Most likely to 'japa' without telling anyone", edition: "nigerian" },
  { prompt: "Most likely to be the MC at every party", edition: "nigerian" },
  { prompt: "Most likely to hoard Indomie during scarcity", edition: "nigerian" },
  { prompt: "Most likely to bring cooler to a party", edition: "nigerian" },
  { prompt: "Most likely to say 'Nigerian time' as an excuse", edition: "nigerian" },
  { prompt: "Most likely to spray money at owambe", edition: "nigerian" },
  { prompt: "Most likely to argue about which jollof is better", edition: "nigerian" },
  { prompt: "Most likely to run generator at 3am", edition: "nigerian" },
  { prompt: "Most likely to buy clothes at Balogun Market", edition: "nigerian" },
  { prompt: "Most likely to marry someone their parents chose", edition: "nigerian" },
  { prompt: "Most likely to become a Nollywood star", edition: "nigerian" },
  { prompt: "Most likely to eat eba with a fork", edition: "nigerian" },
  { prompt: "Most likely to have 'soft life' as a personality", edition: "nigerian" },
  { prompt: "Most likely to scream during a Nigeria match", edition: "nigerian" },
  { prompt: "Most likely to be caught watching African Magic", edition: "nigerian" },
  { prompt: "Most likely to add 'sha' to every sentence", edition: "nigerian" },
  { prompt: "Most likely to run from a lizard", edition: "nigerian" },
  { prompt: "Most likely to say 'God when?' about everything", edition: "nigerian" },
  { prompt: "Most likely to start selling online", edition: "nigerian" },
  { prompt: "Most likely to reply with voice notes only", edition: "nigerian" },
  { prompt: "Most likely to be the loudest at a wedding", edition: "nigerian" },

  // Friends
  { prompt: "Most likely to cancel plans at the last minute", edition: "friends" },
  { prompt: "Most likely to keep a secret the longest", edition: "friends" },
  { prompt: "Most likely to plan the group vacation", edition: "friends" },
  { prompt: "Most likely to forget the group chat name", edition: "friends" },
  { prompt: "Most likely to lend money without asking for it back", edition: "friends" },
  { prompt: "Most likely to show up uninvited", edition: "friends" },
  { prompt: "Most likely to start drama in the group", edition: "friends" },
  { prompt: "Most likely to bring snacks everywhere", edition: "friends" },
  { prompt: "Most likely to double-text without shame", edition: "friends" },
  { prompt: "Most likely to be everyone's therapist", edition: "friends" },
  { prompt: "Most likely to disappear for weeks then reappear", edition: "friends" },
  { prompt: "Most likely to fall asleep at the party", edition: "friends" },
  { prompt: "Most likely to take the best group photos", edition: "friends" },
  { prompt: "Most likely to remember inside jokes from years ago", edition: "friends" },
  { prompt: "Most likely to overshare on social media", edition: "friends" },
  { prompt: "Most likely to call instead of texting", edition: "friends" },
  { prompt: "Most likely to be the matchmaker of the group", edition: "friends" },
  { prompt: "Most likely to pay for everyone's food", edition: "friends" },
  { prompt: "Most likely to get into a fight defending a friend", edition: "friends" },
  { prompt: "Most likely to cry at a friend's wedding", edition: "friends" },

  // Couples
  { prompt: "Most likely to forget the anniversary", edition: "couples" },
  { prompt: "Most likely to steal the blanket at night", edition: "couples" },
  { prompt: "Most likely to win an argument", edition: "couples" },
  { prompt: "Most likely to say 'I love you' first", edition: "couples" },
  { prompt: "Most likely to cook dinner more often", edition: "couples" },
  { prompt: "Most likely to spend too much money on shoes", edition: "couples" },
  { prompt: "Most likely to plan a surprise date", edition: "couples" },
  { prompt: "Most likely to cry during a proposal", edition: "couples" },
  { prompt: "Most likely to be the jealous one", edition: "couples" },
  { prompt: "Most likely to fall asleep during a movie night", edition: "couples" },
  { prompt: "Most likely to take longer getting ready", edition: "couples" },
  { prompt: "Most likely to apologize first after a fight", edition: "couples" },
  { prompt: "Most likely to embarrass the other in public", edition: "couples" },
  { prompt: "Most likely to eat the last slice without asking", edition: "couples" },
  { prompt: "Most likely to post couple selfies", edition: "couples" },
  { prompt: "Most likely to plan the honeymoon", edition: "couples" },
  { prompt: "Most likely to snore", edition: "couples" },
  { prompt: "Most likely to be the better driver", edition: "couples" },
  { prompt: "Most likely to adopt a pet without consulting", edition: "couples" },
  { prompt: "Most likely to pick the restaurant", edition: "couples" },
];

const mostLikelyTargets: Record<MostLikelyPrompt["edition"], number> = {
  standard: 80,
  nigerian: 60,
  friends: 20,
  couples: 20,
};

const mostLikelyBaseByEdition = {
  standard: mostLikelyPrompts.filter((p) => p.edition === "standard"),
  nigerian: mostLikelyPrompts.filter((p) => p.edition === "nigerian"),
  friends: mostLikelyPrompts.filter((p) => p.edition === "friends"),
  couples: mostLikelyPrompts.filter((p) => p.edition === "couples"),
};

(Object.keys(mostLikelyTargets) as MostLikelyPrompt["edition"][]).forEach((edition) => {
  const base = mostLikelyBaseByEdition[edition];
  let pass = 1;

  while (mostLikelyPrompts.filter((p) => p.edition === edition).length < mostLikelyTargets[edition]) {
    const source = base[pass % base.length];
    mostLikelyPrompts.push({
      prompt: `${source.prompt} (Round ${pass + 1})`,
      edition,
    });
    pass += 1;
  }
});
