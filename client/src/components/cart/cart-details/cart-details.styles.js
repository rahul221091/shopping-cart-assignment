import styled from "styled-components";

export const CartItemsCon = styled.ul`
  max-height: 80vh;
  height: auto;
  overflow-y: auto;
  background-color: #eee;
  list-style-type: none;
  min-width: 40rem;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  text-align: center;
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
