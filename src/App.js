import React from "react";
import Header from "./Components/Header/Header";
import Artistas from "./Components/TarjetasArtistas/TarjetasArtistas";


function App() {
  return (
    <div>
      <div>
      <Header/>
      </div>
      <div className='contenedor'>
      <Artistas/>
      </div>
    </div>
  );
}

export default App;
