import React, { useEffect } from "react";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import Menu from "./common/components/menu";
import Services from "./services";
import Header from "./header";
import Footer from "./common/components/footer";

import smooth from "smoothscroll-polyfill";
import Contact from "./contact";
import SideMenu from "./common/components/SideMenu";
import { isMobile } from "react-device-detect";
import Burger from "./common/components/BurgerMenu";
import About from "./about";

import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC = () => {
  useEffect(() => {
    smooth.polyfill();
  }, []);

  return (
    <div className="App">
      <BrowserRouter basename="/">
        {/* Menu desktop or mobile*/}
        {!isMobile ? (
          <>
            <Menu />
            <SideMenu />
          </>
        ) : (
          <Burger />
        )}

        <Header />
        <Services />
        <About />
        <Contact />

        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
