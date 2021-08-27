import React from "react";

import Header from "../../components/Header/Header";
import Product from "../../components/Product/Product";
import Carrousel from "../../components/Carrousel/Carrousel";

import { StorePage, Products } from "./storeStyles";

const Store: React.FC = () => {
  return (
    <StorePage>
      <Header />
      <Carrousel />
      <Products>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </Products>
    </StorePage>
  )
}

export default Store
