import React from "react";

import Header from "../../components/Header/Header";
import Product from "../../components/Product/Product";

import { StorePage, Products } from "./storeStyles";

const Store: React.FC = () => {
  return (
    <StorePage>
      <Header />
      <Products>
        <Product />
      </Products>
    </StorePage>
  )
}

export default Store
