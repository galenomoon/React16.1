import React from "react";
import ReactDOM from "react-dom";
// import BomDia from "./components/BomDia";
import {BoaTarde, BoaNoite} from './components/Multiplos'

ReactDOM.render(
  //JSX
  <div>
    {/* <BomDia name="Galeno" /> */}
    <BoaTarde name="Gusta" />
    <BoaNoite name="Luana" />
  </div>,
  document.getElementById("root")
);
