import React from "react";
import { Link, useParams } from "react-router-dom";
import units from "../Data/UnitsData";

const actionConfigs = [
  { key: "diagnostic", label: "Start diagnostic", path: "diagnostic" },
  { key: "practice", label: "Practice questions", path: "practice" },
  { key: "miniQuiz", label: "Mini quiz", path: "mini-quiz" },
  { key: "unitTest", label: "Unit test", path: "unit-test" },
];

export default function UnitDetail() {
  const { unitId } = useParams();
  const unit = units.find((item) => item.id === unitId);

  if (!unit) {
    return (
      <div className="unit-detail page-card">
        <h1>Unit not found</h1>
        <p>
          We couldn&apos;t find the requested unit. Please return to the list
          and try again.
        </p>
        <Link className="back-link" to="/units">
          ← Back to Units
        </Link>
      </div>
    );
  }

  return (
    <div className="unit-detail page-card">
      <Link className="back-link" to="/units">
        ← All Units
      </Link>
      <h1>{unit.name}</h1>
      <p className="unit-detail-topic">{unit.topic}</p>
      <p className="unit-description">{unit.description}</p>
      <div className="unit-detail-meta">
        <span>Difficulty: {unit.difficulty}</span>
        <span>Estimated time: {unit.estimatedTimeMinutes} minutes</span>
      </div>

      <section className="unit-actions card">
        <h2>Assessment modes</h2>
        <div className="unit-action-grid">
          {actionConfigs.map((action) => (
            <Link
              key={action.key}
              to={`/units/${unit.id}/${action.path}`}
              className="unit-action-btn"
            >
              <div>
                <p className="action-label">{action.label}</p>
                <p className="action-subtext">
                  {unit.questionBanks[action.key].questionCount} questions
                </p>
              </div>
              <span aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
