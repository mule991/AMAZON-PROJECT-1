import { CardActions } from "@mui/material";
import React from "react";
import LayOut from "../../Components/LayOut/LayOut";
import Carousel from '../../Components/Carousel/CarouselEffect';
import Category from '../../Components/Category/CategoryCard';
import Product from '../../Components/Product/Product';

function Landing() {
  return (
    <LayOut>
      <Carousel />
      <Category />
      <Product />
      </LayOut>
    
  );
}

export default Landing;
