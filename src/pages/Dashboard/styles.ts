import styled from 'styled-components';
import { shade } from 'polished';
import Button from '../../components/Button';
// export const Wrapper = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

export const Container = styled.div`
  max-width: 150vh;
  display: block;
  height: 80vh;
  background: #fff9fb;
  border-radius: 5px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;
  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: center;
    align-items: center;
  }
  svg {
    margin-right: 10px;
  }
`;

export const NewButton = styled(Button)`
  background: #191ba9;
  height: 50px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #fff9fb;
  width: 150px;
  font-weight: 500;
  margin-left: 180px;
  margin-top: 10px;
  margin-bottom: 50px;
  display: block;
  text-align: center;
  &:hover {
    background: ${shade(0.2, '#191ba9')};
  }
`;

export const Column = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  list-style: none;
  grid-gap: 20px;
  grid-row: 1;
  /* margin-bottom: 30px; */
  flex-direction: row;
  max-height: 700px;
  overflow-y: hidden;
  -webkit-scrollbar {
    display: none;
  }
`;

export const TitleCard = styled.label`
  font-weight: 500;
  color: #fff9fb;
  height: 40px;
  font-size: 20px;
  margin-top: 8px;
  text-align: center;
  background: #4f759b;
  border-radius: 10px 10px 0 0;
`;

export const ListTask = styled.label`
  width: 100%;
  list-style: none;
  display: grid;
  grid-auto-rows: auto;
  grid-template-columns: 1fr;
  grid-gap: 1ch;
  margin-bottom: 30px;
  flex: 1;
  flex-direction: row;
  max-height: 650px;
  overflow-y: auto; /* has to be scroll, not auto */
  ::-webkit-scrollbar {
    display: contents;
    width: 10px;
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #5dbcd2;
    border-radius: 10px;
  }
  border-radius: 0 0 10px 10px;
  background-color: #4f759b;
`;

export const Card = styled.div`
  cursor: pointer;
  padding: 30px;
  background-color: #5dbcd2;
  border-radius: 4px;
  max-height: 100px;
  white-space: nowrap;
  width: 94%;
  margin-left: 3%;
  margin-bottom: 8px;
`;
