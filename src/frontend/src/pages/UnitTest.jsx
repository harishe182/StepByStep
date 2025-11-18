import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import units from "../Data/UnitsData";
import unitTestQuestionsByUnit from "../Data/UnitTestQuestions";

export default function UnitTest() {
  const { unitId } = useParams();
  const unit = units.find((item) => item.id === unitId);
  const questions = unitTestQuestionsByUnit[unitId] || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedChoiceId, setSelectedChoiceId] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [loadingNext, setLoadingNext] = useState(false);
  const [score, setScore] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setCurrentIndex(0);
    setSelectedChoiceId(null);
    setHasSubmitted(false);
    setIsCorrect(null);
    setFeedbackMessage("");
    setLoadingSubmit(false);
    setLoadingNext(false);
    setScore(0);
    setIsComplete(false);
  }, [unitId]);

  const currentQuestion = useMemo(() => {
    if (!isComplete && questions.length > 0) {
      return questions[currentIndex];
    }
    return null;
  }, [currentIndex, isComplete, questions]);

  const correctChoice = useMemo(() => {
    if (!currentQuestion) return null;
    return currentQuestion.choices.find(
      (choice) => choice.id === currentQuestion.correctChoiceId
    );
  }, [currentQuestion]);

  if (!unit) {
    return (
      <div className="unit-mode-page page-card">
        <h1>Unit not found</h1>
        <Link className="back-link" to="/units">
          Return to Units
        </Link>
      </div>
    );
  }

  if (questions.length === 0) {
    return (
      <div className="unit-mode-page page-card">
        <Link className="back-link" to="/units">
          ← All Units
        </Link>
        <h1>Unit test for {unit.name}</h1>
        <p>No unit test is available for this unit yet.</p>
        <Link className="primary-link" to={`/units/${unit.id}`}>
          Back to unit overview
        </Link>
      </div>
    );
  }

  const questionCount = questions.length;

  const handleSelectChoice = (choiceId) => {
    if (hasSubmitted) return;
    setSelectedChoiceId(choiceId);
  };

  const handleSubmit = () => {
    if (!currentQuestion || loadingSubmit || selectedChoiceId === null) return;
    setLoadingSubmit(true);
    const correct = selectedChoiceId === currentQuestion.correctChoiceId;
    setIsCorrect(correct);
    setFeedbackMessage(
      correct
        ? "Correct! Keep pushing through the test."
        : "Incorrect. Study the explanation before moving on."
    );
    if (correct) {
      setScore((prev) => prev + 1);
    }
    setHasSubmitted(true);
    setLoadingSubmit(false);
  };

  const resetQuestionState = () => {
    setSelectedChoiceId(null);
    setHasSubmitted(false);
    setIsCorrect(null);
    setFeedbackMessage("");
  };

  const handleNextQuestion = () => {
    if (loadingNext) return;
    setLoadingNext(true);
    if (currentIndex < questionCount - 1) {
      setCurrentIndex((prev) => prev + 1);
      resetQuestionState();
    } else {
      setIsComplete(true);
      resetQuestionState();
    }
    setLoadingNext(false);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedChoiceId(null);
    setHasSubmitted(false);
    setIsCorrect(null);
    setFeedbackMessage("");
    setLoadingSubmit(false);
    setLoadingNext(false);
    setScore(0);
    setIsComplete(false);
  };

  const scorePercent = Math.round((score / questionCount) * 100);
  const summaryMessage =
    scorePercent >= 80
      ? "Excellent mastery—move forward with confidence."
      : scorePercent >= 50
      ? "Good work. Review the questions you missed to reach mastery."
      : "Consider revisiting the unit and practice sets before retrying.";

  return (
    <div className="unit-mode-page page-card practice-page">
      <Link className="back-link" to={`/units/${unit.id}`}>
        ← {unit.name}
      </Link>
      <h1>Unit test for {unit.name}</h1>
      <p className="muted">
        A longer checkpoint covering this entire unit. Take your time and use
        the explanations to learn from each step.
      </p>

      {isComplete ? (
        <div className="assessment-summary card">
          <h2>Unit test complete</h2>
          <p>
            You scored <strong>{score}</strong> out of{" "}
            <strong>{questionCount}</strong> ({scorePercent}%).
          </p>
          <p className="muted">{summaryMessage}</p>
          <div className="assessment-actions">
            <button type="button" className="primary-btn" onClick={handleRestart}>
              Retake unit test
            </button>
            <Link className="secondary-link" to={`/units/${unit.id}`}>
              Back to unit overview
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="practice-progress">
            Question <strong>{currentIndex + 1}</strong> of {questionCount}
          </div>

          {currentQuestion && (
            <div className="practice-question card">
              <p className="prompt">{currentQuestion.prompt}</p>
              <div className="choice-list">
                {currentQuestion.choices.map((choice) => {
                  const isSelected = selectedChoiceId === choice.id;
                  const isCorrectChoice =
                    hasSubmitted &&
                    choice.id === currentQuestion.correctChoiceId;
                  const isIncorrectChoice =
                    hasSubmitted &&
                    isSelected &&
                    choice.id !== currentQuestion.correctChoiceId;

                  return (
                    <button
                      key={choice.id}
                      type="button"
                      className={`choice-button${isSelected ? " selected" : ""}${
                        isCorrectChoice ? " correct" : ""
                      }${isIncorrectChoice ? " incorrect" : ""}`}
                      onClick={() => handleSelectChoice(choice.id)}
                      disabled={hasSubmitted}
                    >
                      <span className="choice-id">
                        {choice.id.toUpperCase()}
                      </span>
                      <span className="choice-label">{choice.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          <div className="practice-actions">
            {!hasSubmitted ? (
              <button
                type="button"
                className="primary-btn"
                disabled={!selectedChoiceId || loadingSubmit}
                onClick={handleSubmit}
              >
                {loadingSubmit ? "Submitting..." : "Submit answer"}
              </button>
            ) : (
              <button
                type="button"
                className="primary-btn"
                onClick={handleNextQuestion}
                disabled={loadingNext}
              >
                {loadingNext
                  ? "Loading..."
                  : currentIndex === questionCount - 1
                  ? "Finish test"
                  : "Next question"}
              </button>
            )}
          </div>

          {hasSubmitted && (
            <div
              className={`practice-feedback ${
                isCorrect ? "correct" : "incorrect"
              } card`}
            >
              <p className="feedback-title">
                {isCorrect ? "Correct!" : "Incorrect"}
              </p>
              <p className="feedback-message">{feedbackMessage}</p>
              {!isCorrect && correctChoice && (
                <p className="feedback-correct">
                  Correct answer: {correctChoice.label}
                </p>
              )}
              {currentQuestion.explanation && (
                <p className="feedback-explanation">
                  Explanation: {currentQuestion.explanation}
                </p>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
