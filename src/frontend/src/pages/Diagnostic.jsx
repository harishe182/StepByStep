import React from "react";
import { Link, useParams } from "react-router-dom";
import units from "../Data/UnitsData";

export default function Diagnostic() {
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
      <h1>Diagnostic for {unit.name}</h1>
      <p className="muted">
        This is where the diagnostic experience will go. You&apos;ll be able to
        start answering adaptive questions and get guidance on the right next
        steps.
      </p>
    </div>
  );
}
