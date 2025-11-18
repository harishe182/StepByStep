export const units = [
  {
    id: "algebra-1",
    name: "Algebra 1",
    description:
      "Linear equations, variables, balancing expressions, and building a foundation for algebraic reasoning.",
    topic: "Algebra",
    gradeLevel: "Grade 9",
    estimatedTimeMinutes: 30,
    difficulty: "Beginner",
    questionBanks: {
      diagnostic: { questionCount: 8 },
      practice: { questionCount: 20 },
      miniQuiz: { questionCount: 5 },
      unitTest: { questionCount: 15 },
    },
  },
  {
    id: "linear-functions",
    name: "Linear Functions",
    description:
      "Understanding slope, intercepts, graph interpretation, and modeling real-world situations with lines.",
    topic: "Functions",
    gradeLevel: "Grade 9",
    estimatedTimeMinutes: 40,
    difficulty: "Intermediate",
    questionBanks: {
      diagnostic: { questionCount: 10 },
      practice: { questionCount: 24 },
      miniQuiz: { questionCount: 6 },
      unitTest: { questionCount: 18 },
    },
  },
  {
    id: "quadratic-modeling",
    name: "Quadratic Modeling",
    description:
      "Factoring, completing the square, graphing parabolas, and applying quadratics to projectile motion problems.",
    topic: "Algebra 2",
    gradeLevel: "Grade 10",
    estimatedTimeMinutes: 55,
    difficulty: "Advanced",
    questionBanks: {
      diagnostic: { questionCount: 12 },
      practice: { questionCount: 28 },
      miniQuiz: { questionCount: 7 },
      unitTest: { questionCount: 20 },
    },
  },
];

export default units;
