import React from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";

export default function App() {
  return (
    <div className="App">

      <Navbar
        title="M HASSAN MALIK"
        about="About Me"
      />
      <div className="container my-3">

        <Textform
          heading="Enter the text to analyze"
        />
        <About />
      </div>
    </div>
  );
}


