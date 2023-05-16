import React, { Component } from 'react';
import Section from './SectionTitle';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';

export class FeedbackWidget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positiveFeedbackPercentage: 0,
  };

  incrementFeedback = type => {
    this.setState(
      prevState => ({
        ...prevState,
        [type]: prevState[type] + 1,
        total: prevState.total + 1,
      }),
      this.countPositiveFeedbackPercentage
    );
  };

  countPositiveFeedbackPercentage = () => {
    const { good, total } = this.state;
    const percentage = total === 0 ? 0 : Math.round((good / total) * 100);
    this.setState({ positiveFeedbackPercentage: percentage });
  };

  render() {
    const { good, neutral, bad, total, positiveFeedbackPercentage } =
      this.state;
    return (
      <div>
        <Section title={'Please leave a feedback'}>
          <FeedbackOptions onLeaveFeedback={this.incrementFeedback} />
        </Section>
        {total > 0 ? (
          <Section title={'Statistics'}>
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedbackPercentage}
            />
          </Section>
        ) : (
          <Notification message={'There is no feedback yet'}></Notification>
        )}
      </div>
    );
  }
}

export default FeedbackWidget;
