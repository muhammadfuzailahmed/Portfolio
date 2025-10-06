import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import { Themecontext } from "./Components/Contexts/Themecontext";

function App() {
  return (
    <>
      <Themecontext>
        <Header />
        <Outlet />
        <Footer />
      </Themecontext>
    </>
  );
}

export default App;