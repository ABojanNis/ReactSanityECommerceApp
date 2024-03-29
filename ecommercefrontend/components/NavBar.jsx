'use client';

import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from "react-icons/ai";

import { useStateContext } from "@/context/StateContext";
import { Cart } from "@/components/index";

const NavBar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p>
        <Link href="/" className="logo">Store Name</Link>
      </p>

      <button type="button" className="cart-icon" onClick={ () => setShowCart(true) }>
        <AiOutlineShopping/>
        <span className="cart-item-qty">{ totalQuantities }</span>
      </button>

      { showCart && <Cart/> }
    </div>
  );
};

export default NavBar;
