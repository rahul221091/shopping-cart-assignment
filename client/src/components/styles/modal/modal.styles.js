import styled from "styled-components";
import { devices } from "../../../styles/breakpoints";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background-color: #fff;
  max-width: 60%;
  @media ${devices.tablet} {
    max-width: 80%;
  }
  @media ${devices.tablet} {
    max-width: 95%;
  }
`;
