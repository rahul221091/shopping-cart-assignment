import {
  CartItemCon,
  CartItemImg,
  CartItemBtn,
  TotalItemCost,
  ItemCountModifier,
  ItemCount,
  ItemPrice,
} from "./cart-item.styles";

const CartItemComponent = (props) => {
  const { name, imageURL, price, count } = props.item;
  return (
    <CartItemCon>
      <CartItemImg src={imageURL} alt={name} />
      <h2>{name}</h2>
      <TotalItemCost>{`Rs.${price * count}`}</TotalItemCost>
      <ItemCountModifier>
        <CartItemBtn
          aria-label="Reduce item quantity by 1"
          onClick={props.onItemDecrement}
        >
          -
        </CartItemBtn>
        <ItemCount>{count}</ItemCount>
        <CartItemBtn
          aria-label="Increase item quantity by 1"
          onClick={props.onItemIncrement}
        >
          +
        </CartItemBtn>
        <span aria-label="Multiply" data-icon="&#215;"></span>
        <ItemPrice>{`Rs.${price}`}</ItemPrice>
      </ItemCountModifier>
    </CartItemCon>
  );
};

export default CartItemComponent;
