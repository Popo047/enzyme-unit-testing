import "./App.scss";
import React from "react";
import Header from "./components/header/Header";
import Button from "./components/button/Button";
import Headline from "./components/headline/Headline";

const tempArr = [
  {
    firstName: "Soham",
    lastName: "Debnath",
    email: "popo@popo.com",
    age: 22,
    onlineStatus: true,
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <Headline
        header="Posts"
        description="click to render"
        tempArr={tempArr}
      />
      {/* <Button label="peep" /> */}
    </div>
  );
}

export default App;
