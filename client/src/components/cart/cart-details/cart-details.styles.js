import styled from "styled-components";
import { StyledLink } from "../../styles/styles/button.styles";

export const CartHeaderLabel = styled.h2`
  span {
    font-size: 1.8rem;
  }
`;

export const CartItemsCon = styled.ul`
  height: 70vh;
  overflow-y: auto;
  background-color: #eee;
  list-style-type: none;
  min-width: 40rem;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  text-align: center;
  &[data-items="0"] {
    justify-content: center;
  }
`;

export const CartHeader = styled.header`
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem;
  h2 {
    margin-bottom: 0;
  }
`;

export const CloseCartBtn = styled.button`
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: 3.8rem;
  align-self: center;
  line-height: 2rem;
  [data-icon]:before {
    font-family: icons; /* BYO icon font, mapped smartly */
    content: attr(data-icon);
  }
`;

export const LowPriceCon = styled.div`
  margin: 2rem;
  padding: 1rem;
  background-color: #fff;
  display: flex;
  p {
    flex-grow: 1;
    text-align: center;
  }
`;

export const LowPriceImg = styled.img`
  width: 25%;
`;

export const CartFooter = styled.footer`
  margin: 2rem;
  p {
    text-align: center;
  }
`;

export const CartFooterBtn = styled(StyledLink)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ProceedCheckoutLabel = styled.span`
  flex-grow: 1;
`;
export const TotalPriceLabel = styled.span`
  margin-right: 2rem;
`;

export const NoItemMsg = styled.li`
  align-self: center;
  justify-self: center;
`;
