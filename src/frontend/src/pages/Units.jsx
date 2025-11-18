import React from "react";
import { Link } from "react-router-dom";
import units from "../Data/UnitsData";

const bankLabels = {
  diagnostic: "Diagnostic",
  practice: "Practice",
  miniQuiz: "Mini quiz",
  unitTest: "Unit test",
};

export default function Units() {
  return (
    <div className="units-page">
      <div className="units-header">
        <div>
          <p className="eyebrow">Learning Paths</p>
          <h1>Units</h1>
          <p className="muted">
            Choose a unit to review the overview, question banks, and available
            assessments.
          </p>
        </div>
      </div>

      <div className="units-grid">
        {units.map((unit) => (
          <div key={unit.id} className="unit-card card">
            <div className="unit-card-heading">
              <h2>{unit.name}</h2>
              <span className="unit-topic-chip">{unit.topic}</span>
            </div>
            <p className="unit-meta">
              <span>{unit.difficulty}</span> ·
              <span>{unit.estimatedTimeMinutes} min</span>
            </p>
            <p className="unit-description">{unit.description}</p>
            <div className="unit-bank-summary">
              {Object.entries(unit.questionBanks).map(([key, bank]) => (
                <div key={key}>
                  <p className="bank-label">{bankLabels[key] || key}</p>
                  <p className="bank-count">{bank.questionCount} q</p>
                </div>
              ))}
            </div>
            <Link className="unit-card-link" to={`/units/${unit.id}`}>
              View unit
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
