import Footer from "components/Layout/Footer/Footer";
import Header from "components/Layout/Header/Header";
import React from "react";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();
  return (
    <>
      {location.pathname.includes("auth") ? (
        <main>{children}</main>
      ) : (
        <>
          <Header />
          <main>{children}</main>
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
