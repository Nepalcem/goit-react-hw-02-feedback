import React from 'react';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className="feedback">
      <button className="btn-feedback" onClick={() => onLeaveFeedback('good')}>
        Good
      </button>
      <button
        className="btn-feedback"
        onClick={() => onLeaveFeedback('neutral')}
      >
        Neutral
      </button>
      <button className="btn-feedback" onClick={() => onLeaveFeedback('bad')}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
