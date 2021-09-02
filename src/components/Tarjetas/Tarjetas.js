import React, { Componet } from "react";

import "./Tarjetas.css";

function Tarjeta(props) {
  console.log(props);

  return (
    <div className="character-card">
        {/* importar imagen de public */}
      <img src="assets/images/dummy-avatar.jpg" alt="imagen" />
      <h4>Hola</h4>
      
    </div>
  );
}

export default Tarjeta;