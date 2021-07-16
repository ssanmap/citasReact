import React, { useState } from "react";

export const Formulario = () => {

    // crear el state de citas
    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });
    // funcion para los input
    const actualizarState = (e) => {
       
       setCita({
        ...cita,
           [e.target.name] : e.target.value
       })
    }
    // extrae los valores
    const {mascota, propietario, fecha, hora , sintomas} = cita;
     return (
    <div>
      <h1>Crear Cita:</h1>
      <form action="">
        <label htmlFor="mascota">Nombre Mascota:</label>
        <input 
        type="text" 
        name="mascota" 
        id="mascota" 
        placeholder="Nombre Mascota"
        onChange={actualizarState}
        className="u-full-width" 
        value={mascota}
        />
        <label htmlFor="propietario">Nombre Dueño:</label>
        <input 
        type="text" 
        name="propietario" 
        id="propietario" 
        placeholder="Nombre Dueño"
        className="u-full-width" 
        onChange={actualizarState}
        value={propietario}
        />
        <label htmlFor="fecha">Fecha:</label>
        <input 
        type="date" 
        name="fecha" 
        id="fecha" 
        value={fecha}
        placeholder="Ingrese fecha"
        className="u-full-width" 
        onChange={actualizarState}
        />
         <label htmlFor="hora">Hora:</label>
        <input 
        type="time" 
        name="hora" 
        id="hora" 
        value={hora}
        className="u-full-width" 
        onChange={actualizarState}
        />
        <label htmlFor="sintomas">Sintomas :</label>
        <textarea name="sintomas" id="sintomas" cols="30" rows="10"
        className="u-full-width" 
        value={sintomas}
        onChange={actualizarState}
        ></textarea>
        <button
        type="submit"
        className="u-full-width button-primary"
        >Enviar</button>
      </form>
    </div>
  );
};
