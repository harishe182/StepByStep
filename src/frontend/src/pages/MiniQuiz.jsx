import React from "react";
import { Link, useParams } from "react-router-dom";
import units from "../Data/UnitsData";

export default function MiniQuiz() {
  const { unitId } = useParams();
  const unit = units.find((item) => item.id === unitId);

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

  return (
    <div className="unit-mode-page page-card">
      <Link className="back-link" to={`/units/${unit.id}`}>
        ← {unit.name}
      </Link>
      <h1>Mini quiz for {unit.name}</h1>
      <p className="muted">
        This is where the mini quiz experience will go. Great for a quick check
        on progress before moving on.
      </p>
    </div>
  );
}
