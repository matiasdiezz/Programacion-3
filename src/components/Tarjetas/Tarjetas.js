import React, { Component } from "react";
import "./Tarjetas.css";


function Tarjeta (props) {
  console.log(props);
  return (
    <div className="artist-card">
      <img src={props.imagen} alt=""/>
      <div className="artist-card-content">
        <h3>{props.nombre}</h3>
      </div>
    </div>
  );
}

export default Tarjeta;