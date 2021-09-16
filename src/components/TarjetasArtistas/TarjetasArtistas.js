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
        <section className='container-cards'>
          <article className="row align">
          {this.props.cargando === false ? 
            <div className='loader'>
            <i className='fas fa-spinner fa-spin'></i>
            </div>
           : 
            this.props.artistas.map((artista, i) => (
              <Tarjeta
                changeOrder={this.props.changeOrder}
                key={artista.id + i}
                datosArtista={artista}
                borrarTarjeta= {(id)=>this.props.borrarTarjeta(id)}
              />
            ))
          }
          </article>
           {/* botón para cargar más artistas */}
      <button className="cargarArtistas" onClick={(Artistas) =>
                  this.props.agregarArtistas(Artistas) }>
            <i className="fas fa-chevron-down"></i>
          </button>
        </section>
      </>
    );
  }
}



export default Artistas;