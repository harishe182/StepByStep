import React, { useState } from "react";
import "../App.css";
import domainData from "../Data/domain.json"; // import JSON default

const QuizTable = ({ data }) => {
  const quizzes = data || [];
  const [visibleQuizIndex, setVisibleQuizIndex] = useState(null);

  // Map question ID → question object for easy lookup
  const questionMap = {};
  domainData.questions.forEach((q) => {
    questionMap[q.id] = q;
  });

  if (quizzes.length === 0) {
    return (
      <div className="quiz-table-container">
        <h2 className="table-title">Recent Quiz Results</h2>
        <p>No quiz data available.</p>
      </div>
    );
  }

  return (
    <div className="quiz-table-container">
      <h2 className="table-title">Recent Quiz Results</h2>
      <table className="quiz-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Topic</th>
            <th>Type</th>
            <th>Score</th>
            <th>Percentage</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {quizzes.map((quiz, index) => {
            const wrongQuestions = quiz.questions?.filter((q) => !q.correct) || [];
            const isVisible = visibleQuizIndex === index;

            return (
              <React.Fragment key={index}>
                <tr className={index % 2 === 0 ? "even" : "odd"}>
                  <td>{quiz.date}</td>
                  <td>{quiz.topic}</td>
                  <td>{quiz.difficulty}</td>
                  <td>{quiz.score}</td>
                  <td>{quiz.percentage}%</td>
                  <td>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span
                        className={quiz.status === "Passed" ? "status passed" : "status review"}
                        style={{ padding: "2px 6px", borderRadius: "4px" }}
                      >
                        {quiz.status}
                      </span>
                      <span
                        style={{
                          cursor: "pointer",
                          marginLeft: "8px",
                          fontSize: "14px",
                          userSelect: "none",
                          display: "inline-block",
                          transition: "transform 0.2s ease",
                          transform: isVisible ? "rotate(90deg)" : "rotate(0deg)",
                        }}
                        onClick={() => setVisibleQuizIndex(isVisible ? null : index)}
                        title="See details"
                      >
                        ▸
                      </span>
                    </div>
                  </td>
                </tr>

                {isVisible && (
                  <tr className="quiz-details-row">
                    <td colSpan={6}>
                      {wrongQuestions.length === 0 ? (
                        <div>Nothing wrong here!</div>
                      ) : (
                        <ul>
                          {wrongQuestions.map((q) => {
                            const questionObj = questionMap[q.id];
                            const answerText = questionObj?.multiple_choice.find(
                              (choice) => choice.id === q.expectedAnswer
                            )?.text;

                            return (
                              <li key={q.id}>
                                {`Question ${q.id} — Expected: ${q.expectedAnswer.toUpperCase()}${
                                  answerText ? ` — ${answerText}` : ""
                                }`}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default QuizTable;


