import styled, { css } from "styled-components";

const shrinkLabelStyles = css`
  top: -1.4rem;
  font-size: 1.2rem;
  color: #5cb7c2;
`;

export const FormInputContainer = styled.div`
  position: relative;
  margin-top: 4.5rem;
  margin-bottom: 1rem;
`;

export const FormInputStyles = styled.input`
  background: none;
  position: relative;
  background-color: white;
  color: #000;
  font-size: 18px;
  padding: 1rem;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 0.2rem solid #acacac;
  margin: 2.5rem 0;
  &:focus {
    outline: none;
    border-bottom: 0.2rem solid #5cb7c2;
  }
  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

export const FormInputLabel = styled.label`
  color: #acacac;
  font-size: 1.6rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0.5rem;
  top: 1rem;
  transition: 300ms ease all;
  &.shrink {
    ${shrinkLabelStyles}
  }
`;
