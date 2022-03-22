import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderMain = styled.header`
  box-shadow: 0 1.5rem 1rem rgba(155, 155, 155, 0.1);
  /* padding: 2rem 0; */
`;

export const HeaderContainer = styled.div`
  display: flex;
`;

export const Logo = styled.img`
  /* width: 38rem; */
`;

export const LinkCon = styled.nav`
  margin-left: 5rem;
  flex-grow: 1;
  align-self: flex-end;
`;

export const NavLink = styled(Link)`
  font-size: 1.8rem;
  color: #555;
  display: inline-block;
  margin: 2rem 1rem;
  &:hover {
    color: #ad254f;
  }
`;

export const CartIcon = styled.div`
  background-color: #aaa;
  padding: 2rem;
  font-size: 1.8rem;
  align-self: stretch;
  color: #fff;
`;
