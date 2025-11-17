import React from "react";
import QuizTable from "../Components/QuizTable";
import StatCard from "../Components/StatCard";
import ProgressChart from "../Components/ProgressChart";
import SettingsButton from "../Components/SettingsButton";
import { quizData } from "../Data/QuizData";

export default function QuizHistory() {
  return (
    <div className="dashboard-container">
      <SettingsButton />
      <h1>Quiz History</h1>

      <div className="stats-container">
        <StatCard title="Quizzes Completed" value={quizData.length} />
        <StatCard
          title="Average Score"
          value={
            Math.round(
              quizData.reduce((acc, q) => acc + q.percentage, 0) /
                quizData.length
            ) + "%"
          }
        />
      </div>

      <ProgressChart data={quizData} />
      <QuizTable data={quizData} />
    </div>
  );
}

