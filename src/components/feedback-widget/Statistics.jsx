import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
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

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
