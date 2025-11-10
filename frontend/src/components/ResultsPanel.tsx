import React from "react";

interface ResultsPanelProps {
  results: any;
}

export const ResultsPanel: React.FC<ResultsPanelProps> = ({ results }) => {
  return (
    <div>
      <h2>Survey Results</h2>
      {results ? (
        <div>
          <p>Stress Index: {results.stressIndex}</p>
          <p>Timestamp: {new Date(results.timestamp).toLocaleString()}</p>
        </div>
      ) : (
        <p>No results available</p>
      )}
    </div>
  );
};
