import React from 'react';
import PropTypes from 'prop-types';
import { SectionBox, Title2 } from './Title.styled';

const Title = ({ title, children }) => {
  return (
    <SectionBox>
      <Title2>{title}</Title2>
      {children}
    </SectionBox>
  );
};

export default Title;

Title.propTypes = {
  title: PropTypes.string,
};
