import React from 'react';
import PropTypes from 'prop-types';

import { BtnBox, GoodBtn } from './FeedbackOptions.styled';

const FeedbackOptions = ({ goodIncrement, neutralIncrement, badIncrement }) => {
  return (
    <BtnBox>
      <GoodBtn type="button" onClick={goodIncrement}>
        Good
      </GoodBtn>
      <GoodBtn type="button" onClick={neutralIncrement}>
        Neutral
      </GoodBtn>
      <GoodBtn type="button" onClick={badIncrement}>
        Bad
      </GoodBtn>
    </BtnBox>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  goodIncrement: PropTypes.func.isRequired,
  neutralIncrement: PropTypes.func.isRequired,
  badIncrement: PropTypes.func.isRequired,
};
