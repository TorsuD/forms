import React from "react";
import "./App.css";
import ModalP from "./components/modalp/ModalP";
import "aos/dist/aos.css";
import ModalJ from "./components/modalj/ModalJ";

function App() {
  return (
    <div className="app">
      <ModalP />

      <ModalJ />
    </div>
  );
}

export default App;
