import { useSelector, useDispatch } from "react-redux";
import { selectTotalCartItemsCount } from "../../../redux/cart/cart.select";
import CartItemComponent from "../cart-item/cart-item.component";
import { CartItemsCon, CartHeader, CloseCartBtn } from "./cart-details.styles";
import {
  addItemToCart,
  removeItemToCart,
} from "../../../redux/cart/cart.action";

const CartDetailsComponent = (props) => {
  const cartDetails = useSelector((state) => state.cart);
  const cartItemsCount = useSelector(selectTotalCartItemsCount);
  const dispatch = useDispatch();

  return (
    <div>
      <CartHeader>
        <h2>{`My Cart ${cartItemsCount} items`}</h2>
        <CloseCartBtn aria-label="Close cart" onClick={props.onClose}>
          <span aria-hidden="true" data-icon="&#215;"></span>
        </CloseCartBtn>
      </CartHeader>
      <CartItemsCon>
        {cartDetails.map((item) => (
          <CartItemComponent
            item={item}
            onItemIncrement={() => dispatch(addItemToCart(item))}
            onItemDecrement={() => dispatch(removeItemToCart(item))}
          />
        ))}
        {cartDetails.length === 0 ? <p>No items in Cart</p> : null}
      </CartItemsCon>
    </div>
  );
};

export default CartDetailsComponent;
