export interface TriviaQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;
  difficulty: "easy" | "medium" | "hard";
  category: "science" | "entertainment" | "history" | "sports" | "art" | "general";
}

export const triviaQuestions: TriviaQuestion[] = [
  // Science
  { id: 1, question: "What is the chemical symbol for gold?", options: ["Go", "Au", "Ag", "Gd"], correct: 1, difficulty: "easy", category: "science" },
  { id: 2, question: "How many bones are in the human body?", options: ["206", "208", "204", "201"], correct: 0, difficulty: "easy", category: "science" },
  { id: 3, question: "What planet is closest to the sun?", options: ["Venus", "Mercury", "Mars", "Earth"], correct: 1, difficulty: "easy", category: "science" },
  { id: 4, question: "What gas do plants absorb from the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], correct: 2, difficulty: "easy", category: "science" },
  { id: 5, question: "What is the hardest natural substance?", options: ["Gold", "Iron", "Diamond", "Platinum"], correct: 2, difficulty: "easy", category: "science" },
  { id: 6, question: "What is the speed of light in km/s?", options: ["300,000", "150,000", "500,000", "1,000,000"], correct: 0, difficulty: "medium", category: "science" },
  { id: 7, question: "What organ produces insulin?", options: ["Liver", "Kidney", "Pancreas", "Stomach"], correct: 2, difficulty: "medium", category: "science" },
  { id: 8, question: "What is the most abundant gas in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"], correct: 2, difficulty: "medium", category: "science" },
  { id: 9, question: "Who developed the theory of relativity?", options: ["Newton", "Einstein", "Hawking", "Bohr"], correct: 1, difficulty: "easy", category: "science" },
  { id: 10, question: "What is the smallest unit of matter?", options: ["Molecule", "Atom", "Electron", "Quark"], correct: 3, difficulty: "hard", category: "science" },
  { id: 11, question: "What is the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi body"], correct: 2, difficulty: "easy", category: "science" },
  { id: 12, question: "How many chromosomes do humans have?", options: ["23", "46", "44", "48"], correct: 1, difficulty: "medium", category: "science" },
  { id: 13, question: "What element has the atomic number 1?", options: ["Helium", "Hydrogen", "Oxygen", "Carbon"], correct: 1, difficulty: "easy", category: "science" },
  { id: 14, question: "What is the largest organ in the human body?", options: ["Heart", "Liver", "Brain", "Skin"], correct: 3, difficulty: "medium", category: "science" },
  { id: 15, question: "What type of bond shares electrons?", options: ["Ionic", "Covalent", "Metallic", "Hydrogen"], correct: 1, difficulty: "hard", category: "science" },
  { id: 16, question: "What planet has the most moons?", options: ["Jupiter", "Saturn", "Uranus", "Neptune"], correct: 1, difficulty: "hard", category: "science" },
  { id: 17, question: "What is the boiling point of water in Fahrenheit?", options: ["100", "212", "180", "200"], correct: 1, difficulty: "medium", category: "science" },
  { id: 18, question: "What force keeps us on the ground?", options: ["Magnetism", "Friction", "Gravity", "Inertia"], correct: 2, difficulty: "easy", category: "science" },
  { id: 19, question: "What vitamin does the sun provide?", options: ["A", "B", "C", "D"], correct: 3, difficulty: "easy", category: "science" },
  { id: 20, question: "How many planets in our solar system?", options: ["7", "8", "9", "10"], correct: 1, difficulty: "easy", category: "science" },

  // Entertainment
  { id: 21, question: "Who played Jack in Titanic?", options: ["Brad Pitt", "Leonardo DiCaprio", "Johnny Depp", "Tom Cruise"], correct: 1, difficulty: "easy", category: "entertainment" },
  { id: 22, question: "What is the highest-grossing film of all time?", options: ["Avengers: Endgame", "Avatar", "Titanic", "Star Wars"], correct: 1, difficulty: "medium", category: "entertainment" },
  { id: 23, question: "Who sang 'Thriller'?", options: ["Prince", "Michael Jackson", "Stevie Wonder", "James Brown"], correct: 1, difficulty: "easy", category: "entertainment" },
  { id: 24, question: "What TV show features dragons and the Iron Throne?", options: ["Lord of the Rings", "The Witcher", "Game of Thrones", "Vikings"], correct: 2, difficulty: "easy", category: "entertainment" },
  { id: 25, question: "Who is the voice of Woody in Toy Story?", options: ["Tim Allen", "Tom Hanks", "Jim Carrey", "Robin Williams"], correct: 1, difficulty: "medium", category: "entertainment" },
  { id: 26, question: "What band sang 'Bohemian Rhapsody'?", options: ["The Beatles", "Led Zeppelin", "Queen", "Pink Floyd"], correct: 2, difficulty: "easy", category: "entertainment" },
  { id: 27, question: "Which streaming service made 'Squid Game'?", options: ["Amazon", "Disney+", "Hulu", "Netflix"], correct: 3, difficulty: "easy", category: "entertainment" },
  { id: 28, question: "Who played the Joker in The Dark Knight?", options: ["Jared Leto", "Joaquin Phoenix", "Jack Nicholson", "Heath Ledger"], correct: 3, difficulty: "medium", category: "entertainment" },
  { id: 29, question: "What year did the first iPhone launch?", options: ["2005", "2006", "2007", "2008"], correct: 2, difficulty: "medium", category: "entertainment" },
  { id: 30, question: "Who created Mickey Mouse?", options: ["Pixar", "Walt Disney", "Warner Bros", "Jim Henson"], correct: 1, difficulty: "easy", category: "entertainment" },
  { id: 31, question: "What is the name of Harry Potter's owl?", options: ["Errol", "Hedwig", "Pigwidgeon", "Scabbers"], correct: 1, difficulty: "easy", category: "entertainment" },
  { id: 32, question: "Who sang 'Bad Guy'?", options: ["Dua Lipa", "Billie Eilish", "Ariana Grande", "Olivia Rodrigo"], correct: 1, difficulty: "easy", category: "entertainment" },
  { id: 33, question: "What show features a chemistry teacher turned drug lord?", options: ["Ozark", "Narcos", "Breaking Bad", "Better Call Saul"], correct: 2, difficulty: "easy", category: "entertainment" },
  { id: 34, question: "What fictional country is Black Panther from?", options: ["Zamunda", "Wakanda", "Genovia", "Latveria"], correct: 1, difficulty: "easy", category: "entertainment" },
  { id: 35, question: "Who directed Inception?", options: ["Steven Spielberg", "Christopher Nolan", "James Cameron", "Ridley Scott"], correct: 1, difficulty: "medium", category: "entertainment" },

  // History
  { id: 36, question: "In what year did World War II end?", options: ["1943", "1944", "1945", "1946"], correct: 2, difficulty: "easy", category: "history" },
  { id: 37, question: "Who was the first President of the United States?", options: ["John Adams", "Thomas Jefferson", "George Washington", "Abraham Lincoln"], correct: 2, difficulty: "easy", category: "history" },
  { id: 38, question: "What ancient wonder was in Egypt?", options: ["Colossus", "Hanging Gardens", "Great Pyramid", "Lighthouse"], correct: 2, difficulty: "easy", category: "history" },
  { id: 39, question: "Who discovered America in 1492?", options: ["Magellan", "Columbus", "Vasco da Gama", "Drake"], correct: 1, difficulty: "easy", category: "history" },
  { id: 40, question: "What empire built the Colosseum?", options: ["Greek", "Roman", "Ottoman", "Byzantine"], correct: 1, difficulty: "easy", category: "history" },
  { id: 41, question: "When did Nigeria gain independence?", options: ["1958", "1960", "1963", "1965"], correct: 1, difficulty: "medium", category: "history" },
  { id: 42, question: "Who was the first man on the moon?", options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "John Glenn"], correct: 2, difficulty: "easy", category: "history" },
  { id: 43, question: "What wall fell in 1989?", options: ["Great Wall", "Berlin Wall", "Hadrian's Wall", "Western Wall"], correct: 1, difficulty: "easy", category: "history" },
  { id: 44, question: "Who painted the Mona Lisa?", options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"], correct: 1, difficulty: "easy", category: "history" },
  { id: 45, question: "What ship sank in 1912?", options: ["Lusitania", "Britannic", "Titanic", "Olympic"], correct: 2, difficulty: "easy", category: "history" },
  { id: 46, question: "Who led India's independence movement?", options: ["Nehru", "Gandhi", "Patel", "Bose"], correct: 1, difficulty: "medium", category: "history" },
  { id: 47, question: "What civilization built Machu Picchu?", options: ["Aztec", "Maya", "Inca", "Olmec"], correct: 2, difficulty: "medium", category: "history" },
  { id: 48, question: "In what year did apartheid end in South Africa?", options: ["1990", "1991", "1993", "1994"], correct: 3, difficulty: "hard", category: "history" },
  { id: 49, question: "Who wrote the Communist Manifesto?", options: ["Lenin", "Marx & Engels", "Stalin", "Trotsky"], correct: 1, difficulty: "medium", category: "history" },
  { id: 50, question: "What was the longest war in history?", options: ["Hundred Years War", "Thirty Years War", "Reconquista", "Punic Wars"], correct: 2, difficulty: "hard", category: "history" },

  // Sports
  { id: 51, question: "How many players on a football (soccer) team?", options: ["9", "10", "11", "12"], correct: 2, difficulty: "easy", category: "sports" },
  { id: 52, question: "Who has won the most World Cup titles?", options: ["Germany", "Brazil", "Argentina", "Italy"], correct: 1, difficulty: "easy", category: "sports" },
  { id: 53, question: "What sport uses a shuttlecock?", options: ["Tennis", "Badminton", "Squash", "Table Tennis"], correct: 1, difficulty: "easy", category: "sports" },
  { id: 54, question: "Who is the fastest man ever?", options: ["Carl Lewis", "Usain Bolt", "Tyson Gay", "Asafa Powell"], correct: 1, difficulty: "easy", category: "sports" },
  { id: 55, question: "What country hosted the 2022 FIFA World Cup?", options: ["Russia", "Brazil", "Qatar", "Japan"], correct: 2, difficulty: "easy", category: "sports" },
  { id: 56, question: "How many rings are on the Olympic flag?", options: ["4", "5", "6", "7"], correct: 1, difficulty: "easy", category: "sports" },
  { id: 57, question: "Who has won the most Ballon d'Or awards?", options: ["Ronaldo", "Messi", "Neymar", "Modric"], correct: 1, difficulty: "medium", category: "sports" },
  { id: 58, question: "What sport is played at Wimbledon?", options: ["Cricket", "Tennis", "Golf", "Rugby"], correct: 1, difficulty: "easy", category: "sports" },
  { id: 59, question: "How long is a marathon in miles?", options: ["24.2", "25.2", "26.2", "27.2"], correct: 2, difficulty: "medium", category: "sports" },
  { id: 60, question: "What NBA team has won the most championships?", options: ["Lakers", "Celtics", "Bulls", "Warriors"], correct: 1, difficulty: "medium", category: "sports" },
  { id: 61, question: "Who holds the record for most goals in football?", options: ["Pelé", "Messi", "Ronaldo", "Müller"], correct: 2, difficulty: "medium", category: "sports" },
  { id: 62, question: "What is the national sport of Japan?", options: ["Karate", "Judo", "Sumo", "Kendo"], correct: 2, difficulty: "medium", category: "sports" },
  { id: 63, question: "How many sets to win a men's tennis Grand Slam match?", options: ["2", "3", "4", "5"], correct: 1, difficulty: "medium", category: "sports" },
  { id: 64, question: "What sport is known as 'the beautiful game'?", options: ["Basketball", "Football", "Cricket", "Hockey"], correct: 1, difficulty: "easy", category: "sports" },
  { id: 65, question: "Who is the GOAT of basketball?", options: ["LeBron", "Jordan", "Kobe", "Magic"], correct: 1, difficulty: "easy", category: "sports" },

  // Art & Literature
  { id: 66, question: "Who wrote 'Romeo and Juliet'?", options: ["Dickens", "Shakespeare", "Austen", "Twain"], correct: 1, difficulty: "easy", category: "art" },
  { id: 67, question: "What art movement included Salvador Dalí?", options: ["Cubism", "Surrealism", "Impressionism", "Pop Art"], correct: 1, difficulty: "medium", category: "art" },
  { id: 68, question: "Who wrote '1984'?", options: ["Huxley", "Orwell", "Bradbury", "Atwood"], correct: 1, difficulty: "medium", category: "art" },
  { id: 69, question: "What is the best-selling book of all time?", options: ["Harry Potter", "The Bible", "Don Quixote", "Lord of the Rings"], correct: 1, difficulty: "medium", category: "art" },
  { id: 70, question: "Who painted 'Starry Night'?", options: ["Monet", "Van Gogh", "Picasso", "Rembrandt"], correct: 1, difficulty: "easy", category: "art" },
  { id: 71, question: "What Nigerian author wrote 'Things Fall Apart'?", options: ["Wole Soyinka", "Chinua Achebe", "Chimamanda Adichie", "Ben Okri"], correct: 1, difficulty: "easy", category: "art" },
  { id: 72, question: "Who sculpted 'David'?", options: ["Donatello", "Bernini", "Michelangelo", "Rodin"], correct: 2, difficulty: "medium", category: "art" },
  { id: 73, question: "What language was the original Bible written in?", options: ["Latin", "Greek", "Hebrew", "Aramaic"], correct: 2, difficulty: "hard", category: "art" },
  { id: 74, question: "Who wrote 'Pride and Prejudice'?", options: ["Charlotte Brontë", "Jane Austen", "Mary Shelley", "Virginia Woolf"], correct: 1, difficulty: "easy", category: "art" },
  { id: 75, question: "What literary genre features Sherlock Holmes?", options: ["Fantasy", "Mystery", "Sci-Fi", "Horror"], correct: 1, difficulty: "easy", category: "art" },

  // General Knowledge
  { id: 76, question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra", "Perth"], correct: 2, difficulty: "medium", category: "general" },
  { id: 77, question: "How many continents are there?", options: ["5", "6", "7", "8"], correct: 2, difficulty: "easy", category: "general" },
  { id: 78, question: "What is the largest ocean?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], correct: 2, difficulty: "easy", category: "general" },
  { id: 79, question: "What currency is used in Japan?", options: ["Yuan", "Won", "Yen", "Ringgit"], correct: 2, difficulty: "easy", category: "general" },
  { id: 80, question: "What is the capital of Nigeria?", options: ["Lagos", "Abuja", "Kano", "Ibadan"], correct: 1, difficulty: "easy", category: "general" },
  { id: 81, question: "How many days in a leap year?", options: ["364", "365", "366", "367"], correct: 2, difficulty: "easy", category: "general" },
  { id: 82, question: "What is the smallest country in the world?", options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"], correct: 1, difficulty: "medium", category: "general" },
  { id: 83, question: "What language has the most native speakers?", options: ["English", "Spanish", "Mandarin", "Hindi"], correct: 2, difficulty: "medium", category: "general" },
  { id: 84, question: "What is the tallest mountain?", options: ["K2", "Kangchenjunga", "Everest", "Lhotse"], correct: 2, difficulty: "easy", category: "general" },
  { id: 85, question: "How many time zones does Russia have?", options: ["9", "10", "11", "12"], correct: 2, difficulty: "hard", category: "general" },
  { id: 86, question: "What is the longest river in Africa?", options: ["Congo", "Niger", "Nile", "Zambezi"], correct: 2, difficulty: "easy", category: "general" },
  { id: 87, question: "What country has the most people?", options: ["India", "China", "USA", "Indonesia"], correct: 0, difficulty: "medium", category: "general" },
  { id: 88, question: "What is the largest desert in the world?", options: ["Sahara", "Gobi", "Antarctic", "Arabian"], correct: 2, difficulty: "hard", category: "general" },
  { id: 89, question: "How many colors in a rainbow?", options: ["5", "6", "7", "8"], correct: 2, difficulty: "easy", category: "general" },
  { id: 90, question: "What is the main ingredient in guacamole?", options: ["Tomato", "Avocado", "Pepper", "Onion"], correct: 1, difficulty: "easy", category: "general" },
  { id: 91, question: "What country is the Eiffel Tower in?", options: ["Italy", "Spain", "France", "Germany"], correct: 2, difficulty: "easy", category: "general" },
  { id: 92, question: "How many states in the USA?", options: ["48", "50", "51", "52"], correct: 1, difficulty: "easy", category: "general" },
  { id: 93, question: "What is the currency of the UK?", options: ["Euro", "Dollar", "Pound", "Franc"], correct: 2, difficulty: "easy", category: "general" },
  { id: 94, question: "What animal is the largest on Earth?", options: ["Elephant", "Blue Whale", "Giraffe", "Shark"], correct: 1, difficulty: "easy", category: "general" },
  { id: 95, question: "What is sushi traditionally wrapped in?", options: ["Rice paper", "Seaweed", "Lettuce", "Bamboo"], correct: 1, difficulty: "easy", category: "general" },
  { id: 96, question: "What does DNA stand for?", options: ["Deoxyribonucleic Acid", "Dinitrogen Acid", "Dynamic Nucleic Acid", "Deoxynitric Acid"], correct: 0, difficulty: "medium", category: "general" },
  { id: 97, question: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Ottawa", "Montreal"], correct: 2, difficulty: "medium", category: "general" },
  { id: 98, question: "How many strings on a standard guitar?", options: ["4", "5", "6", "7"], correct: 2, difficulty: "easy", category: "general" },
  { id: 99, question: "What is the largest continent?", options: ["Africa", "North America", "Europe", "Asia"], correct: 3, difficulty: "easy", category: "general" },
  { id: 100, question: "What temperature does water freeze at in Celsius?", options: ["-1", "0", "1", "32"], correct: 1, difficulty: "easy", category: "general" },
];

export const triviaCategories = ["science", "entertainment", "history", "sports", "art", "general"] as const;

const triviaBase = [...triviaQuestions];
const triviaDifficultyCycle: TriviaQuestion["difficulty"][] = ["easy", "medium", "hard"];
const triviaRoundLabels = ["Lightning Round", "Double Points", "Sudden Death", "Final Boss"];

while (triviaQuestions.length < 220) {
  const index = triviaQuestions.length - triviaBase.length;
  const base = triviaBase[index % triviaBase.length];
  const label = triviaRoundLabels[Math.floor(index / triviaBase.length) % triviaRoundLabels.length];

  triviaQuestions.push({
    ...base,
    id: triviaQuestions.length + 1,
    question: `${base.question} — ${label}`,
    difficulty: triviaDifficultyCycle[index % triviaDifficultyCycle.length],
  });
}
