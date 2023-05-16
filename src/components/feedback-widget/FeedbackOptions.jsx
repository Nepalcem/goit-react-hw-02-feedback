import React from 'react';
import PropTypes from 'prop-types';

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

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
