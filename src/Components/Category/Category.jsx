import React from "react";
import { categoryInfos } from "./categoryFullinfos";
import CategoryCard from "./CategoryCard";
import classes from "./category.module.css"
function Category() {
  return (
    <section className={classes.category_container}>
      {categoryInfos.map((infos) => (
        <CategoryCard key={infos.id} data={infos} />
      ))}
      )
    </section>
  );
}

export default Category;
