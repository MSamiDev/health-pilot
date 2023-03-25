import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layouts = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layouts;
