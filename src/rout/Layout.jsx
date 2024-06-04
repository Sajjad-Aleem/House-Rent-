import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Context_Provider from "../store-context/Context_Filter";
export default function Layout() {
  return (
    <Context_Provider>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </Context_Provider>
  );
}
