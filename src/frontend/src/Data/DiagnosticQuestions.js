const diagnosticQuestionsByUnit = {
  "algebra-1": [
    {
      id: "alg1-d1",
      type: "single-choice",
      prompt: "Solve for x: x + 5 = 12",
      choices: [
        { id: "a", label: "x = 5" },
        { id: "b", label: "x = 6" },
        { id: "c", label: "x = 7" },
        { id: "d", label: "x = 17" },
      ],
      correctChoiceId: "c",
      explanation: "Subtract 5 from both sides to get x = 7.",
      hint: "Think about what you add to 5 to reach 12.",
    },
    {
      id: "alg1-d2",
      type: "single-choice",
      prompt: "If 2x = -6, what is x?",
      choices: [
        { id: "a", label: "x = -3" },
        { id: "b", label: "x = 3" },
        { id: "c", label: "x = -12" },
        { id: "d", label: "x = 12" },
      ],
      correctChoiceId: "a",
      explanation: "Divide both sides by 2 to get x = -3.",
      hint: "Undo multiplication by dividing both sides by 2.",
    },
    {
      id: "alg1-d3",
      type: "single-choice",
      prompt: "Which expression is equivalent to 3(x + 2)?",
      choices: [
        { id: "a", label: "3x + 2" },
        { id: "b", label: "3x + 6" },
        { id: "c", label: "3x - 6" },
        { id: "d", label: "x + 6" },
      ],
      correctChoiceId: "b",
      explanation: "Distribute 3 to both x and 2 to get 3x + 6.",
      hint: "Apply the distributive property.",
    },
    {
      id: "alg1-d4",
      type: "single-choice",
      prompt: "Evaluate 4x - 1 when x = 2.",
      choices: [
        { id: "a", label: "7" },
        { id: "b", label: "5" },
        { id: "c", label: "-7" },
        { id: "d", label: "3" },
      ],
      correctChoiceId: "a",
      explanation: "4(2) - 1 = 8 - 1 = 7.",
      hint: "Substitute x = 2 into the expression before simplifying.",
    },
  ],
  "linear-functions": [
    {
      id: "lin-d1",
      type: "single-choice",
      prompt: "What is the slope of y = 3x - 1?",
      choices: [
        { id: "a", label: "3" },
        { id: "b", label: "-1" },
        { id: "c", label: "1/3" },
        { id: "d", label: "-3" },
      ],
      correctChoiceId: "a",
      explanation: "In slope-intercept form y = mx + b, the slope is m = 3.",
      hint: "Compare the equation to y = mx + b.",
    },
    {
      id: "lin-d2",
      type: "single-choice",
      prompt: "Which point lies on the line y = -2x + 4?",
      choices: [
        { id: "a", label: "(0, 4)" },
        { id: "b", label: "(2, 0)" },
        { id: "c", label: "(1, 2)" },
        { id: "d", label: "All of the above" },
      ],
      correctChoiceId: "d",
      explanation:
        "Each point satisfies y = -2x + 4 when you substitute its coordinates.",
      hint: "Plug each x-value into the equation to see if the y-value matches.",
    },
    {
      id: "lin-d3",
      type: "single-choice",
      prompt: "If a line has slope -1 and passes through (0, 3), what is its equation?",
      choices: [
        { id: "a", label: "y = -x + 3" },
        { id: "b", label: "y = x + 3" },
        { id: "c", label: "y = -x - 3" },
        { id: "d", label: "y = 3x - 1" },
      ],
      correctChoiceId: "a",
      explanation:
        "Use slope-intercept form with slope -1 and intercept 3: y = -x + 3.",
      hint: "Start from y = mx + b and use the given point for b.",
    },
  ],
  "quadratic-modeling": [
    {
      id: "quad-d1",
      type: "single-choice",
      prompt: "What are the zeros of y = x^2 - 4?",
      choices: [
        { id: "a", label: "x = 4 only" },
        { id: "b", label: "x = -4 only" },
        { id: "c", label: "x = ±2" },
        { id: "d", label: "x = ±4" },
      ],
      correctChoiceId: "c",
      explanation: "Set x^2 - 4 = 0 → x^2 = 4 → x = ±2.",
      hint: "Add 4 to both sides before taking the square root.",
    },
    {
      id: "quad-d2",
      type: "single-choice",
      prompt: "In y = (x - 3)^2 + 1, what is the vertex?",
      choices: [
        { id: "a", label: "(3, 1)" },
        { id: "b", label: "(-3, 1)" },
        { id: "c", label: "(1, 3)" },
        { id: "d", label: "(0, 1)" },
      ],
      correctChoiceId: "a",
      explanation: "Vertex form y = (x - h)^2 + k has vertex (h, k) = (3, 1).",
      hint: "Identify h and k from the vertex form expression.",
    },
    {
      id: "quad-d3",
      type: "single-choice",
      prompt: "Evaluate y = x^2 + 2x when x = -2.",
      choices: [
        { id: "a", label: "0" },
        { id: "b", label: "-4" },
        { id: "c", label: "4" },
        { id: "d", label: "2" },
      ],
      correctChoiceId: "a",
      explanation: "(-2)^2 + 2(-2) = 4 - 4 = 0.",
      hint: "Substitute x = -2 carefully and keep track of signs.",
    },
  ],
};

export default diagnosticQuestionsByUnit;
export { diagnosticQuestionsByUnit };
