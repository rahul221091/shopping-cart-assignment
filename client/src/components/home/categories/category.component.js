import {
  CategoryItem,
  CategoryImg,
  CategorySub,
  CatDescription,
} from "./category.styles";
import { StyledLink } from "../../shared/styles/button.styles";
const CategoryComponent = (props) => {
  return (
    <CategoryItem isEven={props.index % 2}>
      <CategoryImg
        src={props.data.imageUrl}
        alt={props.data.name}
      ></CategoryImg>
      <CategorySub>
        <h2>{props.data.name}</h2>
        <CatDescription>{props.data.description}</CatDescription>
        <StyledLink to={`/products/${props.data.id}`}>
          Explore {props.data.key}
        </StyledLink>
      </CategorySub>
    </CategoryItem>
  );
};
export default CategoryComponent;
