import styled from "styled-components";
import { StyledBtn } from "../../shared/styles/button.styles";
import { devices } from "../../../styles/breakpoints";

export const ProductItemGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.4fr 1fr auto;
  padding: 1rem;
  border-bottom: 0.2rem dotted #eaeaea;
  box-shadow: 1rem 0 1rem rgb(155 155 155 / 10%);
  @media ${devices.mobile} {
    grid-template-rows: auto auto auto;
    box-shadow: none;
  }
  grid-gap: 1rem;
`;

export const ProductHeader = styled.h3`
  grid-column: 1 / 3;
  align-self: start;
`;

export const ProductImgCon = styled.div`
  grid-column: 1 / 3;
  width: 100%;
  align-self: center;
`;
export const ProductImg = styled.img`
  grid-column: 1 / 3;
  width: 100%;
  align-self: center;
  width: 100%;
  @media ${devices.tablet} {
    grid-column: 1 / 2;
  }
  @media ${devices.mobile} {
    grid-row: 2 / 4;
  }
`;
export const ProductDescription = styled.p`
  font-size: 1.6rem;
  padding: 1rem;
  background-color: #eaeaea;
  grid-column: 1 / 3;
  align-self: stretch;
  display: block;
  @media ${devices.tablet} {
    grid-column: 2 / 3;
  }
`;

export const PriceCon = styled.p`
  font-size: 1.6rem;
  align-self: end;
  @media ${devices.tablet} {
    display: none;
  }
`;

export const PriceBtnLabel = styled.span`
  display: none;
  @media ${devices.tablet} {
    display: inline;
  }
`;

export const ProductBuyBtn = styled(StyledBtn)`
  align-self: end;
  @media ${devices.tablet} {
    grid-column: 1 / 3;
  }
  @media ${devices.mobile} {
    grid-column: 2 / 3;
  }
`;
