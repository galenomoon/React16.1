import React from "react";
import ReactDOM from "react-dom";
import Filho from "./components/Filho";
import Pai from "./components/Pai.";

// import Saudacao from "./components/Saudacao";
// import BomDia from "./components/BomDia";
// import {BoaTarde, BoaNoite} from './components/Multiplos'


ReactDOM.render(
  //JSX
  <div>
      <Pai nome='Paulo' sobrenome='Silva'>
          <Filho nome='Pedro' sobrenome='silva'/>
          <Filho nome='Paulo' sobrenome='silva'/>
          <Filho nome='Carla' sobrenome='silva'/>
          </Pai>
      {/* <Saudacao tipo="Bom dia" nome="joão"/> */}
    {/* <BomDia name="Galeno" /> */}
    {/* <BoaTarde name="Gusta" /> */}
    {/* <BoaNoite name="Luana" /> */}
  </div>,
  document.getElementById("root")
);
