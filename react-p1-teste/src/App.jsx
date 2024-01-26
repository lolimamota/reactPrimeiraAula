// const { Component } = require("react");

//CLASS COMPONENT É PARA ESTADO E CAIU EM DESUSO

// class diaDaSemana extends Component{
//   render(){
//     return (
//       <div>
//         <h1>Olá Quarta</h1>
//       </div>
//     )
//   }
// }

// export default diaDaSemana

import React from "react"
import Main from "./Main/Main"
import Header from "./Header/Header"

function Opa(){
  return(
    <>
      <Header/>
      <h1>Bão Mundo</h1>
      <img src="https://img.quizur.com/f/img5cb13713da48c3.27858077.PNG?lastEdited=1555117868" alt="um pato de desenho animado desenhado fazendo um joinha"/>
      <Main/>
    </>
  )
}
export default Opa