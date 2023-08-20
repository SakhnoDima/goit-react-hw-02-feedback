import { Component } from 'react';
import { PiSmileyBold, PiSmileyMehBold, PiSmileySadBold } from 'react-icons/pi';

import Title from './Title';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
const iconsArr = [<PiSmileyBold />, <PiSmileyMehBold />, <PiSmileySadBold />];
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  goodIncrement = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  neutralIncrement = evt => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  badIncrement = evt => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const sum = good + bad + neutral;
    return sum;
  }
  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    let goodPercent = Math.round((good * 100) / Number(good + bad + neutral));
    if (isNaN(goodPercent)) goodPercent = 0;
    return goodPercent;
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Title title={'Please leave feedback'}>
          <FeedbackOptions
            goodIncrement={this.goodIncrement}
            neutralIncrement={this.neutralIncrement}
            badIncrement={this.badIncrement}
          />
          {this.countTotalFeedback() <= 0 ? (
            <Notification message={'There is no feedback'} />
          ) : (
            <Statistics
              icon={iconsArr}
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Title>
      </>
    );
  }
}
