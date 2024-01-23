import React from "react";
import { Toaster } from "react-hot-toast"

import { Inter } from 'next/font/google';
import './globals.css';
import { Footer, NavBar } from "@/components";
import { StateContext } from "@/context/StateContext";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Store name',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StateContext>
          <Toaster />
          <header>
            <NavBar />
          </header>
          <main className="main-container">
            {children}
          </main>
          <footer>
            <Footer />
          </footer>
        </StateContext>
      </body>
    </html>
  )
}

export default RootLayout;
