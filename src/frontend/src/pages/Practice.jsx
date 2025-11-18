import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import units from "../Data/UnitsData";
import practiceQuestionsByUnit from "../Data/PracticeQuestions";

export default function Practice() {
  const { unitId } = useParams();
  const unit = units.find((item) => item.id === unitId);
  const questions = practiceQuestionsByUnit[unitId] || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedChoiceId, setSelectedChoiceId] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [loadingNext, setLoadingNext] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    setCurrentIndex(0);
    setSelectedChoiceId(null);
    setHasSubmitted(false);
    setIsCorrect(null);
    setFeedbackMessage("");
    setLoadingSubmit(false);
    setLoadingNext(false);
    setIsComplete(false);
    setShowHint(false);
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
        <h1>Practice for {unit.name}</h1>
        <p>No practice questions available for this unit yet.</p>
        <Link className="primary-link" to={`/units/${unit.id}`}>
          Back to unit overview
        </Link>
      </div>
    );
  }

  const handleSelectChoice = (choiceId) => {
    if (hasSubmitted) return;
    setSelectedChoiceId(choiceId);
  };

  const handleShowHint = () => {
    setShowHint(true);
  };

  const handleSubmit = () => {
    if (!currentQuestion || loadingSubmit || selectedChoiceId === null) return;
    setLoadingSubmit(true);
    const correct = selectedChoiceId === currentQuestion.correctChoiceId;
    setIsCorrect(correct);
    setFeedbackMessage(
      correct
        ? "Correct! Great job."
        : "Incorrect. Review the explanation below."
    );
    setHasSubmitted(true);
    setLoadingSubmit(false);
  };

  const resetQuestionState = () => {
    setSelectedChoiceId(null);
    setHasSubmitted(false);
    setIsCorrect(null);
    setFeedbackMessage("");
    setShowHint(false);
  };

  const handleNextQuestion = () => {
    if (loadingNext) return;
    setLoadingNext(true);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      resetQuestionState();
    } else {
      setIsComplete(true);
      resetQuestionState();
    }
    setLoadingNext(false);
  };

  const handleRestart = () => {
    setIsComplete(false);
    setCurrentIndex(0);
    resetQuestionState();
  };

  const questionCount = questions.length;

  return (
    <div className="unit-mode-page page-card practice-page">
      <Link className="back-link" to={`/units/${unit.id}`}>
        ← {unit.name}
      </Link>
      <h1>Practice for {unit.name}</h1>
      <p className="muted">
        Work through the practice set to reinforce skills before taking the
        quizzes and unit test.
      </p>

      {isComplete ? (
        <div className="practice-complete card">
          <h2>Practice complete</h2>
          <p>
            You finished all {questionCount} questions for {unit.name}. Restart
            the set or head back to the unit overview.
          </p>
          <div className="practice-complete-actions">
            <button className="primary-btn" type="button" onClick={handleRestart}>
              Restart practice
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
              {currentQuestion.hint && (
                <div className="hint-section">
                  {!showHint ? (
                    <button
                      type="button"
                      className="hint-btn"
                      onClick={handleShowHint}
                    >
                      Show hint
                    </button>
                  ) : (
                    <div className="hint-box">
                      <p className="hint-label">Hint</p>
                      <p className="hint-text">{currentQuestion.hint}</p>
                    </div>
                  )}
                </div>
              )}
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
                  ? "Finish practice"
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
