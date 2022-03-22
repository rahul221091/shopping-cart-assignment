import React, { Fragment, useState, useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { fetchCategories } from "../../../redux/categories/categories.action";
import {
  SidebarNav,
  SidebarNavLinks,
  SidebarLinkCon,
  SidebarLink,
  SidebarColBtn,
} from "./products.navigation.styles";

const getCategories = (state) =>
  state.categories
    .filter((category) => category.order !== -1)
    .sort((a, b) => a.order - b.order);

const ProductNav = (props) => {
  // const { categoryId } = useParams();
  // const location = useLocation();
  const navigate = useNavigate();
  // alert(product);
  // const { categoryId } = location.state;
  const categories = useSelector((state) => getCategories(state));
  const categoryId = useSelector((state) => state.products.currentCategory);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const dispatch = useDispatch();

  const selectedCategory =
    useMemo(
      () => categories.find((category) => category.id === categoryId),
      [categoryId, categories]
    ) || {};

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories());
    }
  }, []);

  if (categories.length > 0 && !categoryId) {
    navigate(`${categories[0].id}`);
    // dispatch(setCurrentProductsCategory(categories[0].id));
  }

  const toggleNavbar = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <Fragment>
      <SidebarNav>
        <SidebarColBtn onClick={toggleNavbar}>
          <span>{selectedCategory.name}</span>
          <span>﹀</span>
        </SidebarColBtn>
        <SidebarNavLinks open={isNavExpanded}>
          {categories.map((category) => (
            <SidebarLinkCon key={category.id}>
              <SidebarLink
                to={{
                  pathname: `/products/${category.id}`,
                  state: { categoryId: category.id },
                }}
              >
                {category.name}
              </SidebarLink>
            </SidebarLinkCon>
          ))}
        </SidebarNavLinks>
      </SidebarNav>
    </Fragment>
  );
};

export default ProductNav;
