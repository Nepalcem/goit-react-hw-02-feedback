import PropTypes from 'prop-types';
import React, { Component } from 'react';

export class FeedbackWidget extends Component {
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <div>
        <h1>Please leave feedback</h1>
        <button className="btn-feedback">Good</button>
        <button className="btn-feedback">Neutral</button>
        <button className="btn-feedback">Bad</button>
        <div className="statistics">
          <h2>Statistics:</h2>
          <p className="stat">Good: 3</p>
          <p className="stat">Neutral: 2</p>
          <p className="stat">Bad: 1</p>
        </div>
      </div>
    );
  }
}

export default FeedbackWidget;
