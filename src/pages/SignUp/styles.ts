import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translate(0);
  }
`;

export const AnimationContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  animation: ${appearFromRight} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h2 {
      margin-bottom: 24px;
      color: #191ba9;
    }

    a {
      color: #fff;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#191ba9')};
      }
    }
  }
  > a {
      color: #191ba9;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;
      display: flex;
      align-items: center;

      svg {
        margin-right: 16px;
      }

      &:hover {
        color: ${shade(0.2, '#191ba9')};
      }
`;
