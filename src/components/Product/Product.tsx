import React from "react";

import { TiShoppingCart } from 'react-icons/ti'
import { MdAttachMoney } from 'react-icons/md'
import { FiHeart } from 'react-icons/fi'

import {
  ProductComponent,
  Button,
  ProductInfo,
  ProductFooter,
  ProductPicture,
  ProductTitle,
  ProductValue
} from "./productStyles";

const Product: React.FC = () => {
  return (
    <ProductComponent>
      <ProductPicture>
        <Button>
          <FiHeart />
        </Button>
      </ProductPicture>

      <ProductFooter>
        <ProductInfo>
          <ProductTitle>Product name</ProductTitle>
          <ProductValue>30 $</ProductValue>
        </ProductInfo>

        <Button>
          <TiShoppingCart />
        </Button>

        <Button>
          <MdAttachMoney />
        </Button>
      </ProductFooter>
    </ProductComponent>
  )
}

export default Product
