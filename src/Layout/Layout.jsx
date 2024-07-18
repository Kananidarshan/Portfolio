import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center pt-10 ">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
