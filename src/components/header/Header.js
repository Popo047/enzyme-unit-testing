import React from "react";
import "./Header.scss";

const Header = (props) => {
  return (
    <>
      <div class="container" data-testid="headerComponent">
        <h1 class="ui header">Header</h1>
      </div>
    </>
  );
};

export default Header;
