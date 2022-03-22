import {
  ProductItemGrid,
  ProductHeader,
  ProductImg,
  ProductDescription,
  PriceCon,
  PriceBtnLabel,
  ProductBuyBtn,
} from "./product.item.styles";
const ProductItem = (props) => {
  return (
    <ProductItemGrid>
      <ProductHeader>{`${props.data.name}, ${props.data.stock} pcs`}</ProductHeader>
      {/* <ProductImgCon> */}
      <ProductImg src={props.data.imageURL}></ProductImg>
      {/* </ProductImgCon> */}
      <ProductDescription>{props.data.description}</ProductDescription>
      <PriceCon>{`MRP Rs. ${props.data.price}`}</PriceCon>
      <ProductBuyBtn onClick={() => props.addToCart(props.data)}>
        Buy Now <PriceBtnLabel>{`@ Rs.${props.data.price}`}</PriceBtnLabel>
      </ProductBuyBtn>
    </ProductItemGrid>
  );
};

export default ProductItem;
