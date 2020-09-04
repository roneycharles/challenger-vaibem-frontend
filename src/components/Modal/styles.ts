import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  @media screen and (min-width: 800px) {
    export const ModalBox {
      max-width: 300px;
      margin: 0 30px;
    }
  }
`;

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
`;

export const ModalBox = styled.div`
  position: relative;
  width: 400px;
  height: 500px;
  max-width: 500px;
  margin: 0 10%;
  padding: 50px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: #5dbcd2;
  justify-content: space-around;
  cursor: auto;
`;

export const ModalTitle = styled.div`
  color: #191ba9;
  font-size: 30px;
  text-align: center;
`;

export const ModalContent = styled.div`
  margin-top: 15px;
  color: #fff9fb;
  text-align: center;
  font-size: 20px;
`;

export const ModalClose = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  transition: transform 250ms ease-in-out;
  transform-origin: 50% 50%;

  &:hover {
    transform: rotate(180deg);
  }
`;

export const ModalConfirm = styled.img`
  position: absolute;
  top: 30px;
  right: 30px;
  transition: transform 250ms ease-in-out;
  transform-origin: 50% 50%;
  /* justify-content: space-between; */
`;
