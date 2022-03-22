import styled from "styled-components";
import { devices } from "../../../styles/breakpoints";

const ContainerStyles = styled.div`
  max-width: 120rem;
  padding: 0 2rem;
  margin: 0 auto;

  @media ${devices.laptopL} {
    max-width: 114rem;
  }

  @media ${devices.laptop} {
    max-width: 96rem;
  }

  @media ${devices.mobile} {
    width: 100%;
    padding: 0;
  }
`;

export default ContainerStyles;
