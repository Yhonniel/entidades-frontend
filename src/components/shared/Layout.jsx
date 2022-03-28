import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout = () => {
  return (
    <div className="position-relative pb-5 home">
      <Navbar></Navbar>
      <section>
        <Outlet></Outlet>
      </section>
      <Footer></Footer>
    </div>
  );
};
