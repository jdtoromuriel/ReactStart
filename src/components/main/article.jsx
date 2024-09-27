import React from 'react';
import './main.scss';
const Article = ({ receta }) => {
  return (
    <div className='receta'>
      <h2>{receta.titulo}</h2>
      <h5>{receta.fecha}</h5>
      <img src={receta.img} alt={receta.titulo} />
      <p>{receta.descripcion}</p>
      <button>Leer receta</button>
    </div>
  );
}

export default Article;
