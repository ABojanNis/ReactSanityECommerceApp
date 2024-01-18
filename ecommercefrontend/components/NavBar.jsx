import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <p>
        <Link href="/" className="logo">Store Name</Link>
      </p>

      <button type="button" className="cart-icon">
        <AiOutlineShopping />
        <span className="cart-item-qty">1</span>
      </button>
    </div>
  );
};

export default NavBar;
