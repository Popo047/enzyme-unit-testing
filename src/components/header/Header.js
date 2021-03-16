import React from "react";
import "./Header.scss";
// import Logo1 from "./../../logo/AplusTopperlogo.png";
import Logo2 from "./../../logo/Logo1.jpg";

const Header = (props) => {
  return (
    <>
      <header data-testid="headerComponent" className="wrap">
        <div className="logo">
          <img data-testid="logoimg" src={Logo2} alt="logo" />
        </div>
      </header>
    </>
  );
};

export default Header;
