import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const buttonStyles = css`
  color: #fff;
  background-color: #af3858;
  padding: 1rem;
  font-size: 1.6rem;
  border: 0;
`;

export const StyledLink = styled(Link)`
  ${buttonStyles}
  display: inline-block;
`;

export const StyledBtn = styled.button`
  ${buttonStyles}
  display: block;
`;
