import React from 'react';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className="statistics">
      <p className="stat">Good: {good}</p>
      <p className="stat">Neutral: {neutral}</p>
      <p className="stat">Bad: {bad}</p>
      <p className="stat">Total: {total}</p>
      <p className="stat">Positive Feedback: {positivePercentage} %</p>
    </div>
  );
};

export default Statistics;
