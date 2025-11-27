export const dummyUser = {
  userId: "user_001",
  learningPath: "academic",
  currentRank: "E",
  startingRank: "E",
  dungeons: ["dungeon_e_01"],
  favoriteWordList: ["voc_001", "voc_002"],
  createdAt: new Date(),
  updatedAt: new Date(),
};

// ------------------ VOCABO ------------------

export const dummyVocabo = [
  {
    id: "voc_001",
    level: "E",
    mainWord: "Analyze",
    meaning: {
      bangla: "বিশ্লেষণ করা",
      simpleEnglish: "to examine something deeply",
      suggestion: "Often used in academic reports",
    },
    sentence: "Researchers analyze the data before drawing conclusions.",
    sentenceStructure: "Subject + Analyze + Object",
    synonym: ["examine", "inspect", "evaluate"],
    antonym: ["ignore", "neglect"],
    metadata: {
      estimatedTime: 20,
      wordCount: 1,
      complexity: "easy",
      topic: "academic",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },

  {
    id: "voc_002",
    level: "E",
    mainWord: "Interpret",
    meaning: {
      bangla: "ব্যাখ্যা করা",
      simpleEnglish: "to explain the meaning",
      suggestion: "Used in reading comprehension tasks",
    },
    sentence: "Students must interpret the graph carefully.",
    sentenceStructure: "Subject + Interpret + Object",
    synonym: ["explain", "clarify"],
    antonym: ["misunderstand"],
    metadata: {
      estimatedTime: 20,
      wordCount: 1,
      complexity: "easy",
      topic: "analysis",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// ------------------ PHRASAL VERB ------------------

export const dummyPhrasalVerb = [
  {
    id: "pv_001",
    level: "D",
    verb: "carry out",
    meaning: "to conduct or perform",
    sentence: "Scientists carry out experiments in a controlled environment.",
    sentenceStructure: "Subject + Carry Out + Object",
    formality: "neutral",
    category: "academic",
    metadata: {
      estimatedTime: 20,
      complexity: "easy",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// ------------------ WRITING ------------------

export const dummyWriting = [
  {
    id: "write_001",
    level: "E",
    context: "paragraph",
    response:
      "The graph shows the population growth over a ten-year period...",
    metadata: {
      estimatedTime: 180,
      wordCount: 120,
      difficulty: "easy",
      topic: "population",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// ------------------ MCQ ------------------

export const dummyMCQ = [
  {
    id: "mcq_001",
    question: "What is the main idea of the passage?",
    options: ["Growth", "Decline", "Stability", "Unrelated"],
    answer: "Growth",
    difficulty: "easy",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// ------------------ SHORT QUESTION ------------------

export const dummyShortQ = [
  {
    id: "sq_001",
    question: "Define the term 'analysis'.",
    response: "",
    answer: "A detailed examination of elements.",
    difficulty: "medium",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// ------------------ FILL IN THE BLANK ------------------

export const dummyFill = [
  {
    id: "fill_001",
    question: "Researchers often ______ data before reporting results.",
    answer: "analyze",
    difficulty: "easy",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// ------------------ TEST ------------------

export const dummyTest = [
  {
    id: "test_001",
    mcq: ["mcq_001"],
    shortQ: ["sq_001"],
    fillInTheBlank: ["fill_001"],
    performance: {
      mcq: 0,
      shortQ: 0,
      fill: 0,
      total: 0,
    },
    points: 10,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// ------------------ READING ------------------

export const dummyReading = [
  {
    id: "read_001",
    level: "E",
    context: "A short paragraph about climate change...",
    test: "test_001",
    metadata: {
      estimatedTime: 120,
      wordCount: 80,
      difficulty: "easy",
      topic: "environment",
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// ------------------ DUNGEON ------------------

export const dummyDungeon = [
  {
    id: "dungeon_e_01",
    level: "E",
    vocabo: [
      { id: "voc_001", orderIndex: 1 },
      { id: "voc_002", orderIndex: 2 },
    ],

    phrasalVerb: [{ id: "pv_001", orderIndex: 1 }],
    writing: [{ id: "write_001", orderIndex: 1 }],
    reading: [{ id: "read_001", orderIndex: 1 }],
    listening: [],
    speaking: [],

    duration: "15m",
    points: 50,
    aiGenerated: false,
    source: "manual",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// ------------------ PROGRESS ------------------

export const dummyProgress = [
  {
    id: "prog_001",
    userId: "user_001",
    dungeonId: "dungeon_e_01",
    completed: false,
    score: 0,
    attempts: 0,
    lastAccessed: new Date(),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
