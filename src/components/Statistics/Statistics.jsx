import React from 'react';
import { IconContext } from 'react-icons';

import PropTypes from 'prop-types';
import { Title, Item } from './Statistics.styled';

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  icon,
}) => {
  return (
    <div>
      <Title>Statistics :</Title>
      <Item>
        <IconContext.Provider value={{ color: 'green', size: '20px' }}>
          {icon[0]}
        </IconContext.Provider>
        Good : {good}
      </Item>
      <Item>
        <IconContext.Provider value={{ color: 'yellow', size: '20px' }}>
          {icon[1]}
        </IconContext.Provider>
        Neutral: {neutral}
      </Item>
      <Item>
        <IconContext.Provider value={{ color: 'red', size: '20px' }}>
          {icon[2]}
        </IconContext.Provider>
        Bad : {bad}
      </Item>
      <Item>Total : {total}</Item>
      <Item>Positive feedback : {positivePercentage}%</Item>
    </div>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
