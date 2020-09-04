import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

// import signInBackgroundImg from '../../assets/background.jpg';

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

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translate(0);
  }
`;

// export const FrameContainer = styled.div`
//   display: flex;
//   width: 100%;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   background: #5dbcd2;
//   height: 700px;
//   border-radius: 10px;
//   border: 2px solid #191ba9;
//   padding: 0 16px;
//   color: #fff9fb;
//   font-weight: 500;
//   max-width: 700px;
//   margin-top: 16px;
// `;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  animation: ${appearFromLeft} 1s;

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
