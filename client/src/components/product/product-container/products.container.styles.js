import styled from "styled-components";
import { devices } from "../../../styles/breakpoints";
export const ProductsGrid = styled.div`
  display: grid;
  grid-gap: 2rem 2rem;
  justify-content: space-around;
  padding: 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  flex-grow: 1;

  /* @media ${devices.laptopL} {
    max-width: 800px;
  } */

  @media ${devices.laptop} {
    /* max-width: 96rem; */
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media ${devices.tablet} {
    /* max-width: 96rem; */
    grid-template-columns: 1fr 1fr;
  }

  @media ${devices.mobile} {
    /* max-width: 96rem; */
    grid-template-columns: 1fr;
  }
`;
