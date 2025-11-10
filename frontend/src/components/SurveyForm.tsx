import React, { useState } from "react";

interface SurveyFormProps {
  onSubmit: (responses: any) => void;
}

export const SurveyForm: React.FC<SurveyFormProps> = ({ onSubmit }) => {
  const [responses, setResponses] = useState({
    q1: 5,
    q2: 5,
    q3: 5,
    q4: 5,
    q5: 5,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(responses);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Mental Health Survey</h2>
      <div>
        <label>Sleep Quality (1-10):</label>
        <input
          type="number"
          min="1"
          max="10"
          value={responses.q1}
          onChange={(e) => setResponses({ ...responses, q1: parseInt(e.target.value) })}
        />
      </div>
      <button type="submit">Submit Survey</button>
    </form>
  );
};
