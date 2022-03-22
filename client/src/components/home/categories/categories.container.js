import React, { Fragment } from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../../../redux/categories/categories.action";
import CategoryComponent from "./category.component";
import { selectReqCategories } from "../../../redux/categories/categories.select";

class CategoriesComponent extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }
  render() {
    return (
      <Fragment>
        {this.props.categories.map((category, index) => {
          return (
            <CategoryComponent
              key={category.id}
              data={category}
              index={index}
            ></CategoryComponent>
          );
        })}
      </Fragment>
    );
  }
}

const mapStatetoProps = (state) => ({
  categories: selectReqCategories(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories()),
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(CategoriesComponent);
