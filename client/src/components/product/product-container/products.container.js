import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { fetchProducts } from "../../../redux/products/products.action";
import { setCurrentProductsCategory } from "../../../redux/products/products.action";
import { ProductsGrid } from "./products.container.styles";
import ProductItem from "../product-item/product.item.component";
import { selectProductsOfCategory } from "../../../redux/products/products.select";
import { addItemToCart } from "../../../redux/cart/cart.action";

const ProductsComponent = (props) => {
  // const location = useLocation();
  const { categoryId } = useParams();
  // alert(product);
  // const { categoryId } = location.state;
  const productsData = useSelector(selectProductsOfCategory);
  const dispatch = useDispatch();

  useEffect(() => {
    if (productsData.length === 0) {
      dispatch(fetchProducts());
    }
  }, []);

  useEffect(() => {
    dispatch(setCurrentProductsCategory(categoryId));
  }, [categoryId, dispatch]);

  const addToCart = (product) => dispatch(addItemToCart(product));

  return (
    <ProductsGrid>
      {productsData.map((product) => (
        <ProductItem
          key={product.id}
          data={{ ...product }}
          addToCart={addToCart}
        ></ProductItem>
      ))}
    </ProductsGrid>
  );
};

export default ProductsComponent;
// const mapStatetoProps = (state, props) => ({
//   products: state.products
//     .filter((category) => category.order !== -1)
//     .sort((a, b) => a.order - b.order),
// });

// const mapDispatchToProps = (dispatch) => ({
//   fetchProducts: () => dispatch(fetchProducts()),
// });

// export default connect(mapStatetoProps, mapDispatchToProps)(ProductsComponent);
