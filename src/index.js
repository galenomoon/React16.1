import React from "react";
import ReactDOM from "react-dom";
import Saudacao from "./components/Saudacao";
// import BomDia from "./components/BomDia";
// import {BoaTarde, BoaNoite} from './components/Multiplos'


ReactDOM.render(
  //JSX
  <div>
      <Saudacao tipo="Bom dia" nome="joão"/>
    {/* <BomDia name="Galeno" /> */}
    {/* <BoaTarde name="Gusta" /> */}
    {/* <BoaNoite name="Luana" /> */}
  </div>,
  document.getElementById("root")
);
