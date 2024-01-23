'use client'

import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { useStateContext } from "@/context/StateContext";

const ProductQuantity = () => {
  const { decQty, incQty, qty } = useStateContext();

  return (
    <div className="quantity">
      <h3>Quantity:</h3>
      <p className="quantity-desc">
        <span className="minus" onClick={decQty}>
          <AiOutlineMinus/>
        </span>
        <span className="num">{qty}</span>
        <span className="plus" onClick={incQty}>
          <AiOutlinePlus/>
        </span>
      </p>
    </div>
  );
};

export default ProductQuantity;
