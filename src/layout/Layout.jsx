import React from "react";
import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      <header className="w-full">
        <Navbar />
      </header>
      <div>
        <main className="">{children}</main>
      </div>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Layout;
