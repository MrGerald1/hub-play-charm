export interface CategorySprintCard {
  category: string;
  timeSeconds: number;
  minItems: number;
}

export const categorySprintCards: CategorySprintCard[] = [
  { category: "Types of fruit", timeSeconds: 45, minItems: 5 },
  { category: "Countries in Europe", timeSeconds: 45, minItems: 5 },
  { category: "Animals with 4 legs", timeSeconds: 45, minItems: 5 },
  { category: "Fast food restaurants", timeSeconds: 30, minItems: 4 },
  { category: "Colors you can see", timeSeconds: 30, minItems: 5 },
  { category: "Things in a bedroom", timeSeconds: 30, minItems: 5 },
  { category: "Types of music genres", timeSeconds: 45, minItems: 5 },
  { category: "Famous athletes", timeSeconds: 45, minItems: 5 },
  { category: "Things that are round", timeSeconds: 30, minItems: 5 },
  { category: "Movies with sequels", timeSeconds: 45, minItems: 4 },
  { category: "Things you find underwater", timeSeconds: 45, minItems: 5 },
  { category: "Types of drinks", timeSeconds: 30, minItems: 5 },
  { category: "Famous cities", timeSeconds: 45, minItems: 5 },
  { category: "Things that are red", timeSeconds: 30, minItems: 5 },
  { category: "Musical instruments", timeSeconds: 45, minItems: 5 },
  { category: "School subjects", timeSeconds: 30, minItems: 5 },
  { category: "Nigerian states", timeSeconds: 45, minItems: 5 },
  { category: "Things that fly", timeSeconds: 30, minItems: 5 },
  { category: "Types of shoes", timeSeconds: 30, minItems: 5 },
  { category: "Famous brands", timeSeconds: 30, minItems: 5 },
  { category: "Things in a park", timeSeconds: 30, minItems: 4 },
  { category: "Types of candy", timeSeconds: 30, minItems: 4 },
  { category: "Things made of wood", timeSeconds: 30, minItems: 5 },
  { category: "Breakfast foods", timeSeconds: 30, minItems: 5 },
  { category: "Video games", timeSeconds: 45, minItems: 5 },
  { category: "Things at a concert", timeSeconds: 30, minItems: 4 },
  { category: "Types of transport", timeSeconds: 30, minItems: 5 },
  { category: "Things you do on vacation", timeSeconds: 30, minItems: 5 },
  { category: "Sports played indoors", timeSeconds: 45, minItems: 4 },
  { category: "Famous songs", timeSeconds: 45, minItems: 5 },
];

const categorySprintBase = [...categorySprintCards];

while (categorySprintCards.length < 200) {
  const index = categorySprintCards.length - categorySprintBase.length;
  const source = categorySprintBase[index % categorySprintBase.length];
  categorySprintCards.push({
    category: `${source.category} — Blitz ${Math.floor(index / categorySprintBase.length) + 1}`,
    timeSeconds: source.timeSeconds,
    minItems: source.minItems,
  });
}
