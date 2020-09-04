import styled from 'styled-components';
import ReactSelect, { Props as SelectProps } from 'react-select';

export const CustomReactSelect = styled(ReactSelect)<SelectProps>`
  .react-select__control {
    border: 0;
    color: #252627;
    border-radius: 0;
    background-color: #fff;
  }

  .css-yk16xz-control {
    /* border: 0; */
  }

  .css-1pahdxg-control {
    box-shadow: none;
  }

  .react-select__placeholder {
    margin-left: 0;
    color: #252627;
  }

  .react-select__single-value {
    color: #252627;
  }

  .react-select__indicator {
    color: #252627;
  }

  .react-select__input {
    color: #252627;
  }
  padding: 8px;
  background: #fff9fb;
  color: #252627;
  border-radius: 10px;

  font-size: 16px;

  margin-bottom: 10px;
`;
