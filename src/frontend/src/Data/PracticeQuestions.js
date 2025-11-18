const practiceQuestionsByUnit = {
  "algebra-1": [
    {
      id: "alg1-q1",
      type: "single-choice",
      prompt: "Solve for x: 2x + 3 = 11",
      choices: [
        { id: "a", label: "x = 3" },
        { id: "b", label: "x = 4" },
        { id: "c", label: "x = 5" },
        { id: "d", label: "x = 8" },
      ],
      correctChoiceId: "b",
      explanation: "Subtract 3 to get 2x = 8, then divide by 2 to find x = 4.",
    },
    {
      id: "alg1-q2",
      type: "single-choice",
      prompt: "What is the value of x if 3x - 5 = 16?",
      choices: [
        { id: "a", label: "x = 5" },
        { id: "b", label: "x = 6" },
        { id: "c", label: "x = 7" },
        { id: "d", label: "x = 8" },
      ],
      correctChoiceId: "c",
      explanation: "Add 5 to get 3x = 21, then divide by 3 to find x = 7.",
    },
    {
      id: "alg1-q3",
      type: "single-choice",
      prompt: "Simplify: 5x + 2x - 4",
      choices: [
        { id: "a", label: "7x - 4" },
        { id: "b", label: "7x + 4" },
        { id: "c", label: "3x - 4" },
        { id: "d", label: "3x + 4" },
      ],
      correctChoiceId: "a",
      explanation: "Combine like terms: 5x + 2x = 7x, so expression is 7x - 4.",
    },
    {
      id: "alg1-q4",
      type: "single-choice",
      prompt: "Evaluate 4x - 1 when x = -2.",
      choices: [
        { id: "a", label: "-9" },
        { id: "b", label: "-5" },
        { id: "c", label: "-3" },
        { id: "d", label: "7" },
      ],
      correctChoiceId: "a",
      explanation: "4(-2) - 1 = -8 - 1 = -9.",
    },
    {
      id: "alg1-q5",
      type: "single-choice",
      prompt: "Which equation represents 'five more than twice a number y'?",
      choices: [
        { id: "a", label: "2y - 5" },
        { id: "b", label: "2y + 5" },
        { id: "c", label: "5y + 2" },
        { id: "d", label: "y + 5" },
      ],
      correctChoiceId: "b",
      explanation: "Twice a number is 2y and adding five gives 2y + 5.",
    },
  ],
  "linear-functions": [
    {
      id: "lin-q1",
      type: "single-choice",
      prompt: "What is the slope of the line that passes through (2, 5) and (6, 13)?",
      choices: [
        { id: "a", label: "2" },
        { id: "b", label: "3/2" },
        { id: "c", label: "4/3" },
        { id: "d", label: "8" },
      ],
      correctChoiceId: "a",
      explanation:
        "Slope = (13 - 5) / (6 - 2) = 8 / 4 = 2.",
    },
    {
      id: "lin-q2",
      type: "single-choice",
      prompt: "Which equation is the slope-intercept form of a line with slope -3 and y-intercept 4?",
      choices: [
        { id: "a", label: "y = -3x - 4" },
        { id: "b", label: "y = -3x + 4" },
        { id: "c", label: "y = 3x + 4" },
        { id: "d", label: "y = 4x - 3" },
      ],
      correctChoiceId: "b",
      explanation: "Slope-intercept form is y = mx + b, so y = -3x + 4.",
    },
    {
      id: "lin-q3",
      type: "single-choice",
      prompt: "The function f(x) = 2x + 1 is shifted up 3 units. What is the new function?",
      choices: [
        { id: "a", label: "f(x) = 2x - 2" },
        { id: "b", label: "f(x) = 2x + 4" },
        { id: "c", label: "f(x) = 5x + 1" },
        { id: "d", label: "f(x) = 2x + 1" },
      ],
      correctChoiceId: "b",
      explanation: "Shifting up 3 units adds 3 to the output, so f(x) = 2x + 4.",
    },
    {
      id: "lin-q4",
      type: "single-choice",
      prompt: "Which statement describes the line y = -1/2x + 6?",
      choices: [
        { id: "a", label: "Slope 6, intercept -1/2" },
        { id: "b", label: "Slope -1/2, intercept 6" },
        { id: "c", label: "Slope 2, intercept 6" },
        { id: "d", label: "Slope -6, intercept 1/2" },
      ],
      correctChoiceId: "b",
      explanation: "In y = mx + b, m = -1/2 and b = 6.",
    },
    {
      id: "lin-q5",
      type: "single-choice",
      prompt: "What is the y-intercept of the line 4x - 2y = 8?",
      choices: [
        { id: "a", label: "(0, -4)" },
        { id: "b", label: "(0, 4)" },
        { id: "c", label: "(0, -2)" },
        { id: "d", label: "(0, 2)" },
      ],
      correctChoiceId: "a",
      explanation:
        "Set x = 0: -2y = 8, so y = -4 and the intercept is (0, -4).",
    },
  ],
  "quadratic-modeling": [
    {
      id: "quad-q1",
      type: "single-choice",
      prompt: "Factor x^2 + 5x + 6.",
      choices: [
        { id: "a", label: "(x + 2)(x + 3)" },
        { id: "b", label: "(x - 2)(x - 3)" },
        { id: "c", label: "(x + 1)(x + 6)" },
        { id: "d", label: "(x - 1)(x - 6)" },
      ],
      correctChoiceId: "a",
      explanation: "2 and 3 multiply to 6 and add to 5, so (x + 2)(x + 3).",
    },
    {
      id: "quad-q2",
      type: "single-choice",
      prompt: "What is the vertex of y = (x - 4)^2 - 3?",
      choices: [
        { id: "a", label: "(4, -3)" },
        { id: "b", label: "(-4, -3)" },
        { id: "c", label: "(4, 3)" },
        { id: "d", label: "(0, -3)" },
      ],
      correctChoiceId: "a",
      explanation:
        "In vertex form y = (x - h)^2 + k, the vertex is (h, k) = (4, -3).",
    },
    {
      id: "quad-q3",
      type: "single-choice",
      prompt: "Solve x^2 - 9 = 0.",
      choices: [
        { id: "a", label: "x = 3 only" },
        { id: "b", label: "x = -3 only" },
        { id: "c", label: "x = ±3" },
        { id: "d", label: "x = ±9" },
      ],
      correctChoiceId: "c",
      explanation: "Add 9 and take square roots to get x = ±3.",
    },
    {
      id: "quad-q4",
      type: "single-choice",
      prompt: "If a quadratic opens downward, which coefficient must be negative?",
      choices: [
        { id: "a", label: "The leading coefficient a" },
        { id: "b", label: "The linear coefficient b" },
        { id: "c", label: "The constant term c" },
        { id: "d", label: "None of them" },
      ],
      correctChoiceId: "a",
      explanation:
        "When a < 0 in y = ax^2 + bx + c, the parabola opens downward.",
    },
    {
      id: "quad-q5",
      type: "single-choice",
      prompt: "What are the solutions to x^2 + 4x + 4 = 0?",
      choices: [
        { id: "a", label: "x = -4 and x = 0" },
        { id: "b", label: "x = -2 (double root)" },
        { id: "c", label: "x = 2 and x = -2" },
        { id: "d", label: "x = 0 only" },
      ],
      correctChoiceId: "b",
      explanation:
        "The quadratic factors to (x + 2)^2, so x = -2 is a repeated root.",
    },
  ],
};

export default practiceQuestionsByUnit;
export { practiceQuestionsByUnit };
