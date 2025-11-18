import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import units from "../Data/UnitsData";
import diagnosticQuestionsByUnit from "../Data/DiagnosticQuestions";

export default function Diagnostic() {
  const { unitId } = useParams();
  const unit = units.find((item) => item.id === unitId);
  const questions = diagnosticQuestionsByUnit[unitId] || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedChoiceId, setSelectedChoiceId] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [loadingNext, setLoadingNext] = useState(false);
  const [score, setScore] = useState(0);
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
    setScore(0);
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
        <h1>Diagnostic for {unit.name}</h1>
        <p>No diagnostic is available for this unit yet.</p>
        <Link className="primary-link" to={`/units/${unit.id}`}>
          Back to unit overview
        </Link>
      </div>
    );
  }

  const totalQuestions = questions.length;

  const handleSelectChoice = (choiceId) => {
    if (isComplete || hasSubmitted) return;
    setSelectedChoiceId(choiceId);
  };

  const handleSubmit = () => {
    if (!currentQuestion || loadingSubmit || selectedChoiceId === null) return;
    setLoadingSubmit(true);
    const correct = selectedChoiceId === currentQuestion.correctChoiceId;
    setIsCorrect(correct);
    setFeedbackMessage(
      correct
        ? "Correct! Nice work."
        : "Incorrect. Review the explanation before moving on."
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
    setShowHint(false);
  };

  const handleNextQuestion = () => {
    if (loadingNext || isComplete) return;
    setLoadingNext(true);
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
      resetQuestionState();
    } else {
      setIsComplete(true);
      resetQuestionState();
    }
    setLoadingNext(false);
  };

  const handleShowHint = () => {
    setShowHint(true);
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setIsComplete(false);
    resetQuestionState();
  };

  const scorePercent = Math.round((score / totalQuestions) * 100);
  let recommendation =
    "We recommend starting with Practice questions for this unit before you try the Mini quiz or Unit test.";
  if (scorePercent >= 80) {
    recommendation =
      "You did very well on the diagnostic. Jump into the Unit test or use Practice if you want extra review.";
  } else if (scorePercent >= 50) {
    recommendation =
      "You have a solid start. Do a round of Practice questions and then take the Mini quiz.";
  }

  return (
    <div className="unit-mode-page page-card practice-page">
      <Link className="back-link" to={`/units/${unit.id}`}>
        ← {unit.name}
      </Link>
      <h1>Diagnostic for {unit.name}</h1>
      <p className="muted">
        A short placement check to recommend where you should start in this
        unit.
      </p>

      {isComplete ? (
        <div className="assessment-summary card">
          <h2>Diagnostic complete</h2>
          <p>
            You answered <strong>{score}</strong> out of{" "}
            <strong>{totalQuestions}</strong> questions correctly (
            {scorePercent}%).
          </p>
          <p className="muted">{recommendation}</p>
          <div className="assessment-actions">
            <button type="button" className="primary-btn" onClick={handleRestart}>
              Retake diagnostic
            </button>
            <Link className="secondary-link" to={`/units/${unit.id}`}>
              Go to unit
            </Link>
          </div>
          <div className="assessment-link-row">
            <Link className="primary-link" to={`/units/${unit.id}/practice`}>
              Practice
            </Link>
            <Link className="primary-link" to={`/units/${unit.id}/mini-quiz`}>
              Mini quiz
            </Link>
            <Link className="primary-link" to={`/units/${unit.id}/unit-test`}>
              Unit test
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="practice-progress">
            Question <strong>{currentIndex + 1}</strong> of {totalQuestions}
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
                  : currentIndex === totalQuestions - 1
                  ? "Finish diagnostic"
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
