import React from "react";
import "../App.css";

const QuizTable = ({ data }) => {
  // If data is undefined, default to empty array
  const quizzes = data || [];

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
          {quizzes.map((quiz, index) => (
            <tr key={index} className={index % 2 === 0 ? "even" : "odd"}>
              <td>{quiz.date}</td>
              <td>{quiz.topic}</td>
              <td>{quiz.difficulty}</td>
              <td>{quiz.score}</td>
              <td>{quiz.percentage}%</td>
              <td
                className={
                  quiz.status === "Passed"
                    ? "status passed"
                    : "status review"
                }
              >
                {quiz.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuizTable;



