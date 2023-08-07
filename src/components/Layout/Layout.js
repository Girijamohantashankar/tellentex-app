import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import LandingPage from "./LandingPage";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <LandingPage />
      <Footer />
    </>
  );
};

export default Layout;
