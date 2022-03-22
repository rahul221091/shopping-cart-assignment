import styled from "styled-components";
import { devices } from "../../../styles/breakpoints";
export const CategoryItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8rem;
  flex-direction: ${(props) => (props.isEven ? "row-reverse" : "row")};

  border-bottom-width: 4px;
  border-bottom-style: solid;
  border-image: linear-gradient(to bottom, #000, rgba(0, 0, 0, 0)) 1 100%;
  padding: 0 2rem;
`;
export const CategoryImg = styled.img`
  width: 40rem;

  @media ${devices.tablet} {
    width: 50%;
  }

  @media ${devices.mobile} {
    width: 40%;
  }
`;

export const CategorySub = styled.div`
  flex-grow: 1;
  text-align: center;
`;

export const CatDescription = styled.p`
  margin: 0;
  margin-bottom: 2rem;
`;
