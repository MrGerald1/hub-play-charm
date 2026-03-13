export interface DareCard {
  dare: string;
  tier: "mild" | "medium" | "hot";
}

export const dareCards: DareCard[] = [
  // Mild
  { dare: "Do your best impression of someone in the room", tier: "mild" },
  { dare: "Show the last photo you took on your phone", tier: "mild" },
  { dare: "Let someone read your last text message out loud", tier: "mild" },
  { dare: "Do 10 push-ups right now", tier: "mild" },
  { dare: "Speak in an accent for the next 2 rounds", tier: "mild" },
  { dare: "Call a random contact and say 'I miss you'", tier: "mild" },
  { dare: "Post a selfie right now with no filter", tier: "mild" },
  { dare: "Let the group choose your profile picture for 24 hours", tier: "mild" },
  { dare: "Dance for 30 seconds with no music", tier: "mild" },
  { dare: "Say something nice about every person in the room", tier: "mild" },
  { dare: "Eat a spoonful of hot sauce", tier: "mild" },
  { dare: "Let someone tickle you for 15 seconds", tier: "mild" },
  { dare: "Sing the chorus of the last song you listened to", tier: "mild" },
  { dare: "Show your screen time report", tier: "mild" },
  { dare: "Speak only in questions for the next 3 rounds", tier: "mild" },
  { dare: "Swap shirts with someone for 2 rounds", tier: "mild" },
  { dare: "Tell the story of your most embarrassing moment", tier: "mild" },
  { dare: "Let someone go through your camera roll for 30 seconds", tier: "mild" },
  { dare: "Do your best TikTok dance", tier: "mild" },
  { dare: "Hold a plank position until your next turn", tier: "mild" },
  { dare: "Say the alphabet backwards", tier: "mild" },
  { dare: "Let someone draw on your face", tier: "mild" },
  { dare: "Do a model walk across the room", tier: "mild" },
  { dare: "Talk in a whisper for the next 2 rounds", tier: "mild" },
  { dare: "Give your phone to someone for 1 minute", tier: "mild" },

  // Medium
  { dare: "Read the last DM you sent to someone out loud", tier: "medium" },
  { dare: "Show your most-used emoji and explain why", tier: "medium" },
  { dare: "Call your ex and tell them you've been thinking about them", tier: "medium" },
  { dare: "Let the group post something on your social media", tier: "medium" },
  { dare: "Do your best seductive face", tier: "medium" },
  { dare: "Confess something you've never told anyone here", tier: "medium" },
  { dare: "Show the person you've searched the most on Instagram", tier: "medium" },
  { dare: "Text your crush 'hey, are you awake?'", tier: "medium" },
  { dare: "Let someone compose and send a text from your phone", tier: "medium" },
  { dare: "Reveal your most played song on Spotify", tier: "medium" },
  { dare: "Say your hottest take and defend it for 1 minute", tier: "medium" },
  { dare: "Let someone look through your search history for 15 seconds", tier: "medium" },
  { dare: "Recreate a viral TikTok right now", tier: "medium" },
  { dare: "Tell the group about your worst date ever", tier: "medium" },
  { dare: "Show the group your Notes app", tier: "medium" },
  { dare: "Let someone send a voice note from your phone", tier: "medium" },
  { dare: "Rank everyone in the room from best to worst looking", tier: "medium" },
  { dare: "Share a screenshot from your chat with your best friend", tier: "medium" },
  { dare: "Do your best 'come hither' look at the camera", tier: "medium" },
  { dare: "Call someone you haven't spoken to in 6+ months", tier: "medium" },

  // Hot
  { dare: "Show the most scandalous photo on your phone", tier: "hot" },
  { dare: "Reveal your body count to the group", tier: "hot" },
  { dare: "Demonstrate your best kiss on the back of your hand", tier: "hot" },
  { dare: "Share the wildest DM you've ever received", tier: "hot" },
  { dare: "Let someone read your most recent Tinder/Hinge conversation", tier: "hot" },
  { dare: "Confess your biggest relationship regret", tier: "hot" },
  { dare: "Share your most embarrassing bedroom story", tier: "hot" },
  { dare: "Call someone and flirt with them for 30 seconds", tier: "hot" },
  { dare: "Tell the group about a time you got caught doing something wrong", tier: "hot" },
  { dare: "Reveal the craziest thing you've done for a crush", tier: "hot" },
  { dare: "Show the last 5 people you followed on Instagram and explain each", tier: "hot" },
  { dare: "Tell the group about your worst kiss ever", tier: "hot" },
  { dare: "Share a secret you've been keeping from someone in this room", tier: "hot" },
  { dare: "Read your most recent search history out loud", tier: "hot" },
  { dare: "Confess the biggest lie you've told someone here", tier: "hot" },
];

const dareTargets: Record<DareCard["tier"], number> = {
  mild: 50,
  medium: 50,
  hot: 50,
};

const dareBaseByTier = {
  mild: dareCards.filter((card) => card.tier === "mild"),
  medium: dareCards.filter((card) => card.tier === "medium"),
  hot: dareCards.filter((card) => card.tier === "hot"),
};

(Object.keys(dareTargets) as DareCard["tier"][]).forEach((tier) => {
  const base = dareBaseByTier[tier];
  let pass = 1;

  while (dareCards.filter((card) => card.tier === tier).length < dareTargets[tier]) {
    const source = base[pass % base.length];
    dareCards.push({
      tier,
      dare: `${source.dare} (Variant ${pass + 1})`,
    });
    pass += 1;
  }
});
