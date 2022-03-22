import React from "react";
import ContainerStyles from "../styles/styles/container.styles";
import CartIconComponent from "../cart/cart-icon/cart.icon.components";
import {
  HeaderMain,
  HeaderContainer,
  LogoLink,
  Logo,
  LinkCon,
  NavLink,
  HeaderLeft,
  SecLinkCon,
  SecLink,
} from "./header.styles";

const Header = (props) => {
  return (
    <HeaderMain>
      <ContainerStyles>
        <HeaderContainer>
          <LogoLink to="/">
            <Logo src="/static/images/logo.png" alt="Logo" />
          </LogoLink>
          <LinkCon>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
          </LinkCon>
          <HeaderLeft>
            <SecLinkCon>
              <SecLink to="/signin">SignIn</SecLink>
              <SecLink to="/register">Register</SecLink>
            </SecLinkCon>
            <CartIconComponent />
          </HeaderLeft>
        </HeaderContainer>
      </ContainerStyles>
    </HeaderMain>
  );
};

export default Header;
