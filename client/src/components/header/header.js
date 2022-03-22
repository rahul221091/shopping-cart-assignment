import React from "react";
import ContainerStyles from "../styles/styles/container.styles";
import CartIconComponent from "../cart/cart-icon/cart.icon.components";
import { Link } from "react-router-dom";
import {
  HeaderMain,
  HeaderContainer,
  Logo,
  LinkCon,
  NavLink,
} from "./header.styles";

const Header = (props) => {
  return (
    <HeaderMain>
      <ContainerStyles>
        <HeaderContainer>
          <Link to="/">
            <Logo src="/static/images/logo.png" alt="Logo" />
          </Link>
          <LinkCon>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
          </LinkCon>
          <CartIconComponent />
        </HeaderContainer>
      </ContainerStyles>
    </HeaderMain>
  );
};

export default Header;
