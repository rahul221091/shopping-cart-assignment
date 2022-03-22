import React from "react";
import { Routes, Route } from "react-router";
import ProductComponent from "../../components/product/product-container/products.container";
import ProductNav from "../../components/product/navigation/products.navigation.component";
import ContainerStyles from "../../components/styles/styles/container.styles";
import { ProductCon } from "./product.page.styles";

const ProductsPage = () => {
  return (
    <ContainerStyles>
      <ProductCon>
        <ProductNav></ProductNav>
        <main>
          <Routes>
            <Route path=":categoryId" element={<ProductComponent />} />
          </Routes>
        </main>
      </ProductCon>
    </ContainerStyles>
  );
};

export default ProductsPage;
