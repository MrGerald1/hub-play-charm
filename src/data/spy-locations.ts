export interface SpyLocation {
  name: string;
  category: "nigerian" | "african" | "global" | "events" | "unusual";
  roles: string[];
  questionPrompts: string[];
}

export const spyLocations: SpyLocation[] = [
  // Nigerian Life
  { name: "Lagos Danfo Bus", category: "nigerian", roles: ["Driver", "Conductor", "Passenger", "Hawker"], questionPrompts: ["What's the weather like?", "What do you hear?", "What are people wearing?"] },
  { name: "Owambe Party", category: "nigerian", roles: ["DJ", "MC", "Guest", "Caterer"], questionPrompts: ["What music is playing?", "What are you eating?", "What's the dress code?"] },
  { name: "Nigerian Market (Balogun)", category: "nigerian", roles: ["Trader", "Buyer", "Porter", "Security"], questionPrompts: ["What can you buy here?", "Is it crowded?", "What's the smell like?"] },
  { name: "NYSC Camp", category: "nigerian", roles: ["Corps Member", "Soldier", "Camp Director", "Kitchen Staff"], questionPrompts: ["What time do you wake up?", "What are you wearing?", "What activity is happening?"] },
  { name: "Suya Spot", category: "nigerian", roles: ["Suya Man", "Customer", "Bystander", "Delivery Rider"], questionPrompts: ["What are you eating?", "Is it night or day?", "What's the smell?"] },
  { name: "Lagos Third Mainland Bridge", category: "nigerian", roles: ["Driver", "Passenger", "Traffic Officer", "Hawker"], questionPrompts: ["Can you see water?", "Is there traffic?", "What time is it?"] },
  { name: "Nigerian Church Service", category: "nigerian", roles: ["Pastor", "Choir Member", "Usher", "Worshiper"], questionPrompts: ["What sounds do you hear?", "How are people dressed?", "What are people doing?"] },
  { name: "Lekki Toll Gate", category: "nigerian", roles: ["Driver", "Attendant", "Police Officer", "Pedestrian"], questionPrompts: ["Are there cars?", "What's the weather?", "Is it busy?"] },
  { name: "Nigerian University Campus", category: "nigerian", roles: ["Student", "Lecturer", "Porter", "Vendor"], questionPrompts: ["What are people carrying?", "Is it exam season?", "What buildings are nearby?"] },
  { name: "Generator Repair Shop", category: "nigerian", roles: ["Mechanic", "Customer", "Apprentice", "Parts Seller"], questionPrompts: ["What do you hear?", "Is it dirty?", "What tools are around?"] },
  { name: "Abuja CBD", category: "nigerian", roles: ["Civil Servant", "Driver", "Security Guard", "Vendor"], questionPrompts: ["What buildings are around?", "Is it organized?", "What's the traffic like?"] },
  { name: "Nigerian Barber Shop", category: "nigerian", roles: ["Barber", "Customer", "Apprentice", "Waiting Customer"], questionPrompts: ["What sounds do you hear?", "What's on the TV?", "Is there AC?"] },

  // African Landmarks
  { name: "Victoria Falls", category: "african", roles: ["Tourist", "Guide", "Photographer", "Park Ranger"], questionPrompts: ["Can you hear water?", "Is it misty?", "What animals are nearby?"] },
  { name: "Pyramids of Giza", category: "african", roles: ["Tourist", "Archaeologist", "Camel Rider", "Guard"], questionPrompts: ["Is it hot?", "What's the terrain like?", "What's the landscape?"] },
  { name: "Zanzibar Beach", category: "african", roles: ["Tourist", "Fisherman", "Hotel Staff", "Diver"], questionPrompts: ["Can you see the ocean?", "What's the sand like?", "Is it warm?"] },
  { name: "Serengeti Safari", category: "african", roles: ["Tourist", "Safari Guide", "Photographer", "Researcher"], questionPrompts: ["What animals can you see?", "What vehicle are you in?", "Is it dusty?"] },
  { name: "Table Mountain", category: "african", roles: ["Hiker", "Cable Car Operator", "Tourist", "Guide"], questionPrompts: ["Can you see the city?", "How's the wind?", "What's the altitude?"] },
  { name: "Marrakech Souk", category: "african", roles: ["Vendor", "Tourist", "Snake Charmer", "Spice Seller"], questionPrompts: ["What can you smell?", "Is it colorful?", "Are there animals?"] },

  // Global
  { name: "Airport Terminal", category: "global", roles: ["Pilot", "Passenger", "Security", "Flight Attendant"], questionPrompts: ["Is it noisy?", "What's on the screens?", "Are people rushing?"] },
  { name: "Hospital Emergency Room", category: "global", roles: ["Doctor", "Nurse", "Patient", "Receptionist"], questionPrompts: ["What do you smell?", "Is it busy?", "What sounds do you hear?"] },
  { name: "Movie Theater", category: "global", roles: ["Projectionist", "Viewer", "Usher", "Snack Vendor"], questionPrompts: ["Is it dark?", "What sounds do you hear?", "What are people eating?"] },
  { name: "Space Station", category: "global", roles: ["Astronaut", "Mission Control", "Scientist", "Engineer"], questionPrompts: ["Can you feel gravity?", "What can you see outside?", "What are you wearing?"] },
  { name: "Casino", category: "global", roles: ["Dealer", "Gambler", "Security", "Waitress"], questionPrompts: ["Are there lights?", "What sounds do you hear?", "What time is it?"] },
  { name: "Submarine", category: "global", roles: ["Captain", "Navigator", "Engineer", "Sonar Operator"], questionPrompts: ["Can you see the sun?", "Is it cramped?", "What sounds are there?"] },
  { name: "Cruise Ship", category: "global", roles: ["Captain", "Passenger", "Chef", "Entertainer"], questionPrompts: ["Can you see land?", "Is there music?", "What's the food like?"] },
  { name: "Art Museum", category: "global", roles: ["Curator", "Visitor", "Security Guard", "Art Student"], questionPrompts: ["Is it quiet?", "What's on the walls?", "Can you take photos?"] },
  { name: "Underground Bunker", category: "global", roles: ["Commander", "Scientist", "Guard", "Communication Officer"], questionPrompts: ["Can you see the sky?", "Is it cold?", "How deep are you?"] },
  { name: "Sushi Restaurant", category: "global", roles: ["Chef", "Customer", "Waiter", "Manager"], questionPrompts: ["What do you smell?", "What's on the menu?", "Is there a conveyor belt?"] },

  // Events
  { name: "Music Festival", category: "events", roles: ["Performer", "Fan", "Security", "Sound Engineer"], questionPrompts: ["Is it loud?", "How many people are there?", "What stage are you near?"] },
  { name: "Wedding Reception", category: "events", roles: ["Bride/Groom", "DJ", "Guest", "Photographer"], questionPrompts: ["Is there cake?", "What music is playing?", "What are people wearing?"] },
  { name: "Football Stadium", category: "events", roles: ["Player", "Referee", "Fan", "Commentator"], questionPrompts: ["Is the crowd loud?", "What's the score?", "What color are the jerseys?"] },
  { name: "Graduation Ceremony", category: "events", roles: ["Graduate", "Dean", "Parent", "Photographer"], questionPrompts: ["What are people wearing?", "Is there a stage?", "Are people emotional?"] },
  { name: "Comic Convention", category: "events", roles: ["Cosplayer", "Vendor", "Fan", "Artist"], questionPrompts: ["Are people in costume?", "What's being sold?", "Is it crowded?"] },
  { name: "Marathon Race", category: "events", roles: ["Runner", "Spectator", "Medic", "Volunteer"], questionPrompts: ["Are people sweating?", "Is there a finish line?", "What are people wearing?"] },

  // Unusual
  { name: "Time Machine", category: "unusual", roles: ["Inventor", "Time Traveler", "Assistant", "Observer"], questionPrompts: ["What year is it?", "Is the machine working?", "What can you see?"] },
  { name: "Pirate Ship", category: "unusual", roles: ["Captain", "First Mate", "Cook", "Lookout"], questionPrompts: ["Can you see land?", "What flag is flying?", "Is the sea rough?"] },
  { name: "Haunted House", category: "unusual", roles: ["Ghost", "Investigator", "Scared Visitor", "Owner"], questionPrompts: ["Is it dark?", "Do you hear noises?", "Is it cold?"] },
  { name: "Dragon's Lair", category: "unusual", roles: ["Dragon", "Knight", "Treasure Hunter", "Wizard"], questionPrompts: ["Is it hot?", "Can you see gold?", "Is there fire?"] },
  { name: "Alien Spaceship", category: "unusual", roles: ["Alien", "Abductee", "Pilot", "Scientist"], questionPrompts: ["What does the control panel look like?", "Can you see Earth?", "What language do they speak?"] },
  { name: "Underwater City", category: "unusual", roles: ["Diver", "Resident", "Explorer", "Marine Biologist"], questionPrompts: ["Can you breathe?", "What fish do you see?", "How deep is it?"] },
  { name: "Zombie Apocalypse Shelter", category: "unusual", roles: ["Leader", "Scout", "Medic", "Survivor"], questionPrompts: ["Is it safe outside?", "What supplies do you have?", "How many people are here?"] },
  { name: "Chocolate Factory", category: "unusual", roles: ["Owner", "Worker", "Inspector", "Taste Tester"], questionPrompts: ["What do you smell?", "What machines are running?", "Is it warm?"] },
];
