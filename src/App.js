import React, { Component, useState} from 'react';
import {Formulario } from './Components/Formulario';

function App() {
  const [citas, setcitas] = useState([])
  // fx que toma las citas y agregue la nueva
  const crearCita = cita => {
    setcitas([
      ...citas,
      cita
    ]);
  }
  
  return (
    <div className="App">
      
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
           <Formulario
           crearCita={crearCita}
           ></Formulario>
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
