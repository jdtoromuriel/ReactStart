import React from 'react';
import './header.scss';
import logo from './../../../public/logo.png'

let infoHeader = {
    titulo: "La cocina de David",
    descripcion: "La cocina de David"
}
const header = () => {
  return (
    <header class="header">
        <h1 className='header-h1'><img src={logo} alt="logo" className='header-logo' /> {infoHeader.titulo}</h1>
        <p>{infoHeader.descripcion}</p> 
    </header>
  )
}

export default header