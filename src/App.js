import React, { Component, useEffect, useState} from 'react';
import {Formulario } from './Components/Formulario';
import Cita from './Components/Cita';

function App() {
  const [citas, setcitas] = useState([])

  // citas en local storage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales  = [];
  }
  // useefect para cuando cambia el state
  useEffect(() => {
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas))
    } else{
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas])
  // fx que toma las citas y agregue la nueva
  const crearCita = cita => {
    setcitas([
      ...citas,
      cita
    ]);
  }
  // fx para eliminar citas
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    setcitas(nuevasCitas);
  }

  // titulo condicional
  const titulo = citas.length === 0 ?  'No hay Citas' : 'Administra tus citas';

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
            <h2>{titulo}</h2>
            {citas.map(c => (
              <Cita
              cita={c}
              key={c.id}
              eliminarCita={eliminarCita}
              />
              ))}
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
