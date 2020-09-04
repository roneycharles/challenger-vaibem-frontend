import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #fff9fb;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #fff9fb;
  color: #252627;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #bb0a21;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #191ba9;
      border-color: #191ba9;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #191ba9;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #252627;

    &::placeholder {
      color: #666360;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #bb0a21;
    color: #fff;

    &::before {
      border-color: #bb0a21 transparent;
    }
  }
`;
