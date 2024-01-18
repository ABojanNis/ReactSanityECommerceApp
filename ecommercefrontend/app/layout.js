import React from "react";

import { Inter } from 'next/font/google';
import './globals.css';
import {Footer, NavBar} from "@/components";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Store name',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <NavBar />
        </header>
        <main className="main-container">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  )
}

export default RootLayout;
