import styled from "styled-components";
import { Link } from "react-router-dom";
import { devices } from "../../styles/breakpoints";

export const HeaderMain = styled.header`
  box-shadow: 0 1.5rem 1rem rgba(155, 155, 155, 0.1);
  /* padding: 2rem 0; */
`;

export const HeaderContainer = styled.div`
  display: flex;
`;

export const LogoLink = styled(Link)`
  align-self: center;
`;

export const Logo = styled.img`
  /* width: 38rem; */
  @media ${devices.mobile} {
    width: 15rem;
  }
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
  align-self: flex-end;
`;

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SecLinkCon = styled.nav`
  display: flex;
  margin-top: 1rem;
`;

export const SecLink = styled(Link)`
  font-size: 1.6rem;
  color: #000;
  margin-left: 2rem;
`;
