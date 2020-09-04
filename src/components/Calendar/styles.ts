import styled from 'styled-components';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';

export const CalendarInput = styled(ReactDatePicker)<ReactDatePickerProps>`
  background: #fff9fb;
  padding: 16px;
  width: 100%;
  border: 2px solid #fff9fb;
  color: #252627;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-radius: 10px;
`;
