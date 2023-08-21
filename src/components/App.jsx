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
  onLeaveFeedback = state => {
    this.setState(prevState => ({ [state]: prevState[state] + 1 }));
  };

  countTotalFeedback() {
    const total = Object.values(this.state).reduce(
      (acc, option) => acc + option,
      0
    );
    return total;
  }
  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    let goodPercent = Math.round((good * 100) / Number(total));
    if (isNaN(goodPercent)) goodPercent = 0;
    return goodPercent;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    return (
      <>
        <Title title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          {this.countTotalFeedback() === 0 ? (
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
