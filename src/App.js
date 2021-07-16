import React, { Component} from 'react';
import {Formulario } from './Components/Formulario';

function App() {
  return (
    <div className="App">
      
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
           <Formulario></Formulario>
          </div>
          <div className="one-half column">
            2
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
