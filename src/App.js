import React from "react";
import Contents from "./Components/ContentComponent/Contents"
import "./App.css";
import Header from "./Components/HeaderComponent/Header";

function App() {
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <Header/>
      <Contents/>
    </div>
  );
}

export default App;
