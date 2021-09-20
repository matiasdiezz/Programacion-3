import React from 'react'
import Tarjeta from '../Tarjetas/Tarjetas';
import './TarjetasArtistas'

function Artistas (props){
return (
      <>
        <section className='container-cards'>
          <article className="row align">
          {props.cargando === false ? 
            <div className='loader'>
            <i className='fas fa-spinner fa-spin'></i>
            </div>
           : 
            props.artistas.map((artista, i) => (
              <Tarjeta
                changeOrder={props.changeOrder}
                key={artista.id + i}
                datosArtista={artista}
                borrarTarjeta= {(id)=>props.borrarTarjeta(id)}
              />
            ))
          }
          </article>
           {/* botón para cargar más artistas */}
          <button className="cargarArtistas" onClick={(Artistas) =>
                  props.agregarArtistas(Artistas) }>
            <i className="fas fa-chevron-down"></i>
          </button>
        </section>
      </>
    );
  }




export default Artistas;