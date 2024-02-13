'use client'

import React, { useEffect } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import { useStateContext } from "@/context/StateContext";

const ProductQuantity = () => {
  const { decQty, incQty, qty, setQty } = useStateContext();

  useEffect(() => {
    setQty(1);
  }, []);

  return (
    <div className="quantity">
      <h3>Quantity:</h3>
      <p className="quantity-desc">
        <span className="minus" onClick={ decQty }>
          <AiOutlineMinus/>
        </span>
        <span className="num">{ qty }</span>
        <span className="plus" onClick={ incQty }>
          <AiOutlinePlus/>
        </span>
      </p>
    </div>
  );
};

export default ProductQuantity;
