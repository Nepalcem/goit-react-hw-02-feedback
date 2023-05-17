import React from 'react';
import PropTypes from 'prop-types';
import { FeedbackButton } from './FeedbackOptions.styled';
import { FeedbackList } from './FeedbackList.styled';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <FeedbackList>
      <FeedbackButton onClick={() => onLeaveFeedback('good')}>
        Good
      </FeedbackButton>
      <FeedbackButton
        className="feedback__button"
        onClick={() => onLeaveFeedback('neutral')}
      >
        Neutral
      </FeedbackButton>
      <FeedbackButton
        className="feedback__button"
        onClick={() => onLeaveFeedback('bad')}
      >
        Bad
      </FeedbackButton>
    </FeedbackList>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
