export const quizTemplates = [
  {
    id: "spark-starter",
    name: "SPARK Starter",
    description: "A balanced set for easy first conversations.",
    duration: "3 sets · 9 questions",
    sets: [
      { id: "easy-hellos", name: "Easy hellos", questions: ["Your ideal night starts with…", "What makes a first hello feel easy?", "Pick a tiny joy."] },
      { id: "night-out", name: "Night-out energy", questions: ["Pick your dance-floor energy.", "When the music changes, you…", "Choose your spontaneous side quest."] },
      { id: "good-conversation", name: "Good conversation", questions: ["A perfect conversation is…", "What are you curious about lately?", "Your friends would call you…"] },
    ],
  },
  {
    id: "after-hours",
    name: "After Hours",
    description: "Playful prompts for lively, late-night events.",
    duration: "3 sets · 9 questions",
    sets: [
      { id: "dance-floor", name: "Dance-floor stories", questions: ["What song gets you moving every time?", "Front of the crowd or near the speakers?", "Who would you want to see live again?"] },
      { id: "side-quests", name: "Spontaneous side quests", questions: ["Pick a midnight snack run.", "A free ticket takes you where?", "What’s your best unplanned night out?"] },
      { id: "playful-debate", name: "Playful debates", questions: ["Is the aux cord a responsibility?", "Best fries: shoestring or chunky?", "One song everyone knows the words to?"] },
    ],
  },
  {
    id: "slow-burn",
    name: "Slow Burn",
    description: "Thoughtful, low-pressure questions with room to connect.",
    duration: "3 sets · 9 questions",
    sets: [
      { id: "little-things", name: "Little things", questions: ["What’s a small thing that made you smile this week?", "A place that always feels like a reset?", "What are you learning just for fun?"] },
      { id: "stories-we-keep", name: "Stories we keep", questions: ["A story your friends ask you to retell?", "What tradition would you keep forever?", "What’s something you changed your mind about?"] },
      { id: "looking-ahead", name: "Looking ahead", questions: ["What would your ideal Sunday look like?", "Something new you’d like to try?", "What does a really good week feel like?"] },
    ],
  },
] as const;
