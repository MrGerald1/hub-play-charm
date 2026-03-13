export interface FishbowlPrompt {
  text: string;
  category: "person" | "place" | "thing" | "action" | "pop-culture";
}

export const fishbowlPrompts: FishbowlPrompt[] = [
  { text: "Barack Obama", category: "person" },
  { text: "Beyoncé", category: "person" },
  { text: "Elon Musk", category: "person" },
  { text: "Cristiano Ronaldo", category: "person" },
  { text: "Oprah Winfrey", category: "person" },
  { text: "The Eiffel Tower", category: "place" },
  { text: "The Great Wall of China", category: "place" },
  { text: "Times Square", category: "place" },
  { text: "The Moon", category: "place" },
  { text: "Disneyland", category: "place" },
  { text: "A flying carpet", category: "thing" },
  { text: "An iPhone", category: "thing" },
  { text: "A rubber duck", category: "thing" },
  { text: "A time machine", category: "thing" },
  { text: "A lightsaber", category: "thing" },
  { text: "Surfing on a wave", category: "action" },
  { text: "Eating spaghetti", category: "action" },
  { text: "Walking on the moon", category: "action" },
  { text: "Riding a roller coaster", category: "action" },
  { text: "Taking a selfie", category: "action" },
  { text: "Harry Potter", category: "pop-culture" },
  { text: "Baby Yoda", category: "pop-culture" },
  { text: "SpongeBob SquarePants", category: "pop-culture" },
  { text: "The Avengers", category: "pop-culture" },
  { text: "Game of Thrones", category: "pop-culture" },
  { text: "Taylor Swift", category: "person" },
  { text: "Burna Boy", category: "person" },
  { text: "Wizkid", category: "person" },
  { text: "Davido", category: "person" },
  { text: "Tiwa Savage", category: "person" },
];

export const fishbowlRounds = [
  { round: 1, name: "Describe It", rules: "Use as many words as you want to describe the word. No acting, no sounds.", timeSeconds: 60 },
  { round: 2, name: "Act It Out", rules: "No words allowed. Act it out like charades!", timeSeconds: 60 },
  { round: 3, name: "One Word", rules: "Say only ONE word to help your team guess. No gestures.", timeSeconds: 60 },
];

const fishbowlBase = [...fishbowlPrompts];

while (fishbowlPrompts.length < 120) {
  const index = fishbowlPrompts.length - fishbowlBase.length;
  const source = fishbowlBase[index % fishbowlBase.length];
  fishbowlPrompts.push({
    ...source,
    text: `${source.text} (${Math.floor(index / fishbowlBase.length) + 2})`,
  });
}

export const fishbowlThemedPacks = {
  naijaNight: fishbowlPrompts.slice(0, 30),
  movieMadness: fishbowlPrompts.slice(30, 60),
  softLifeChaos: fishbowlPrompts.slice(60, 90),
  wildcard: fishbowlPrompts.slice(90, 120),
};
