import React from 'react'; // es opcional
import '../hojas-de-estilo/Testimonio.css';

// Crear la función dentro o fuera del componente
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio' 
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}
        alt={`Foto de ${capitalizeFirstLetter(props.imagen)}`}/>

      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong> en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}


export default Testimonio;