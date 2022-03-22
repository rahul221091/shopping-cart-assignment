import styled from "styled-components";

export const CartItemCon = styled.li`
  background-color: #fff;
  display: grid;
  padding: 2rem;
  margin-top: 2rem;
  grid-template-columns: min-content auto min-content;
  grid-template-rows: auto auto;
  grid-gap: 1rem 2rem;
  h2 {
    text-align: start;
  }
`;

export const CartItemImg = styled.img`
  grid-row: 1 / 3;
  width: 10rem;
`;

export const ItemCountModifier = styled.div`
  display: flex;
  gap: 2rem;
  [data-icon]:before {
    font-family: icons; /* BYO icon font, mapped smartly */
    content: attr(data-icon);
    font-size: 2rem;
    align-self: center;
  }
`;

export const CartItemBtn = styled.button`
  background-color: #af3858;
  border-radius: 50%;
  color: #fff;
  font-size: 2rem;
  border: none;
  display: flex;
  width: 3rem;
  justify-content: center;
`;

export const ItemCount = styled.strong`
  font-size: 1.8rem;
  align-self: center;
`;

export const ItemPrice = styled.span`
  font-size: 1.6rem;
  align-self: center;
`;

export const TotalItemCost = styled.span`
  font-size: 1.8rem;
  align-self: center;
  grid-row: 1 / 3;
  grid-column: 3 / 4;
`;
