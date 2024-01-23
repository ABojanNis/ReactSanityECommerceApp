'use client';

import React from 'react';

import { useStateContext } from "@/context/StateContext";

const ProductButtons = ({ product }) => {
  const { qty, onAdd } = useStateContext();
  return (
    <div className="buttons">
      <button type="button" className="add-to-cart" onClick={ () => onAdd(product, qty) }>Add to Cart</button>
      <button type="button" className="buy-now">Buy Now</button>
    </div>
  );
};

export default ProductButtons;
