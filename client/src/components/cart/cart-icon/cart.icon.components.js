import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../../styles/modal/modal.component";
import { selectTotalCartItemsCount } from "../../../redux/cart/cart.select";
import { StyledCartIcon, CartIconImg } from "./cart.icon.styles";
import CartDetailsComponent from "../cart-details/cart-details.component";

const CartIconComponent = (props) => {
  const cartItemsCount = useSelector(selectTotalCartItemsCount);
  const [openCart, setOpenCart] = useState(false);

  return (
    <Fragment>
      <StyledCartIcon onClick={() => setOpenCart(!openCart)}>
        <CartIconImg alt="Cart Icon" src="/static/images/cart.svg" />
        <span>{`${cartItemsCount} Items`}</span>
      </StyledCartIcon>
      <Modal open={openCart} onClose={() => setOpenCart(false)}>
        <CartDetailsComponent onClose={() => setOpenCart(false)} />
      </Modal>
    </Fragment>
  );
};

export default CartIconComponent;
