import React, { Component } from 'react'
import Tarjeta from '../Tarjetas/Tarjetas';
import './TarjetasArtistas'

class Artistas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };

  }

  
  render() {
return (
      <>
        <div className='container-cards'>
          <div className="row align">
          {this.props.cargando === false ? 
            <i className='fas fa-spinner fa-spin'></i>
           : 
            this.props.artistas.map((artista, i) => (
              <Tarjeta
                changeOrder={this.props.changeOrder}
                key={artista.id + i}
                datosArtista={artista}
                borrarTarjeta= {()=>this.props.borrarTarjeta()}
              />
            ))
          }
          </div>
          {/* botón para cargar más artistas */}
          <button className="cargarArtistas" onClick={(Artistas) =>
                  this.props.agregarArtistas(Artistas) }>
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
      </>
    );
  }
}



export default Artistas;