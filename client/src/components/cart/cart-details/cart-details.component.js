import { useSelector, useDispatch } from "react-redux";
import {
  selectTotalCartItemsCount,
  selectTotalCartCost,
} from "../../../redux/cart/cart.select";
import CartItemComponent from "../cart-item/cart-item.component";
import {
  CartHeaderLabel,
  CartItemsCon,
  CartHeader,
  CloseCartBtn,
  LowPriceCon,
  LowPriceImg,
  CartFooter,
  CartFooterBtn,
  ProceedCheckoutLabel,
  TotalPriceLabel,
  NoItemMsg,
} from "./cart-details.styles";
import {
  addItemToCart,
  removeItemToCart,
} from "../../../redux/cart/cart.action";
import { Fragment } from "react";

const CartDetailsComponent = (props) => {
  const cartDetails = useSelector((state) => state.cart);
  const cartItemsCount = useSelector(selectTotalCartItemsCount);
  const totalCost = useSelector(selectTotalCartCost);
  const dispatch = useDispatch();

  return (
    <div>
      <CartHeader>
        <CartHeaderLabel>
          My Cart{" "}
          {cartItemsCount ? <span>{`(${cartItemsCount} items)`}</span> : null}
        </CartHeaderLabel>
        <CloseCartBtn aria-label="Close cart" onClick={props.onClose}>
          <span aria-hidden="true" data-icon="&#215;"></span>
        </CloseCartBtn>
      </CartHeader>
      <CartItemsCon data-items={cartDetails.length}>
        {cartDetails.map((item) => (
          <CartItemComponent
            item={item}
            onItemIncrement={() => dispatch(addItemToCart(item))}
            onItemDecrement={() => dispatch(removeItemToCart(item))}
          />
        ))}
        {cartDetails.length === 0 ? (
          <NoItemMsg>
            <h3>No items in your Cart</h3>
            <p>Your favourite items are just a click away</p>
          </NoItemMsg>
        ) : (
          <LowPriceCon>
            <LowPriceImg
              src="/static/images/lowest-price.png"
              alt="Lowest price"
            />
            <p>You wont find it cheaper anywhere</p>
          </LowPriceCon>
        )}
      </CartItemsCon>
      <CartFooter>
        {cartDetails.length ? (
          <p>Promo code can be applied on payment page</p>
        ) : null}
        <CartFooterBtn
          to="/"
          aria-label={
            cartDetails.length ? "Proceed to checkout" : "Start Shopping"
          }
          onClick={props.onClose}
        >
          {cartDetails.length ? (
            <Fragment>
              <ProceedCheckoutLabel>Proceed to Checkout</ProceedCheckoutLabel>
              <TotalPriceLabel>{`Rs.${totalCost}`}</TotalPriceLabel>
              <span aria-hidden="true">&#62;</span>
            </Fragment>
          ) : (
            "Start Shopping"
          )}
        </CartFooterBtn>
      </CartFooter>
    </div>
  );
};

export default CartDetailsComponent;
