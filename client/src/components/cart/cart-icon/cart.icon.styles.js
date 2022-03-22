import styled from "styled-components";
import { devices } from "../../../styles/breakpoints";

export const StyledCartIcon = styled.button`
  padding: 1rem 2rem;
  color: #000;
  display: flex;
  border: 0;
  align-self: flex-end;
  font-size: 1.8rem;
  & span {
    align-self: center;
  }
  @media ${devices.mobile} {
    align-self: stretch;
  }
`;

export const CartIconImg = styled.img`
  width: 3rem;
  align-self: center;
`;
