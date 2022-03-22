import styled from "styled-components";
import { devices } from "../../styles/breakpoints";

export const ProductCon = styled.div`
  display: flex;
  @media ${devices.mobile} {
    flex-direction: column;
  }
`;
