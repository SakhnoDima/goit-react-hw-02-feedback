import styled from 'styled-components';

export const BtnBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 16px;
`;
export const GoodBtn = styled.button`
  width: 80px;
  border: 2px solid black;
  border-radius: 4px;
  padding: 4px;

  &:hover {
    background-color: ${({ children }) => {
      switch (children) {
        case 'Good':
          return 'green';
        case 'Neutral':
          return 'yellow';
        case 'Bad':
          return 'red';
        default:
          return 'white';
      }
    }};
    box-shadow: 1px 1px 4px 5px
      ${({ children }) => {
        switch (children) {
          case 'Good':
            return 'green';
          case 'Neutral':
            return 'yellow';
          case 'Bad':
            return 'red';
          default:
            return 'white';
        }
      }};
  }
`;
