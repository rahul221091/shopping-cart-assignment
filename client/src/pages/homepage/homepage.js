import React from "react";
import CategoriesComponent from "../../components/home/categories/categories.container";
import ContainerStyles from "../../components/styles/styles/container.styles";
import { CategoriesCon } from "./homepage.styles";
import HeroComponent from "../../components/home/hero/hero.component";

const HomePage = () => {
  return (
    <ContainerStyles>
      <main>
        <section>
          <HeroComponent />
        </section>
        <section>
          <CategoriesCon>
            <CategoriesComponent></CategoriesComponent>
          </CategoriesCon>
        </section>
      </main>
    </ContainerStyles>
  );
};

export default HomePage;
