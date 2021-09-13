import React, { Component } from 'react'
import Tarjeta from '../Tarjetas/Tarjetas';
import './TarjetasArtistas'

class Artistas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      artistasFilter: [],
      artistas: [],
      cargando: false,
      textoFiltrar: ""
    };
  }

  componentDidMount() {
    console.log("component did mount");
    const url = "https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/artists?index=0&limit=10";
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        console.log(data);
        this.setState({
          cargando: true,
          artistas: data.data,
          artistasFilter: data.data,
          textoFiltrar: this.props.textoFiltrar,
          });
      })
      .catch((err) => console.log(err));
  }

  agregarArtistas() {
    let cantidadNueva = this.state.artistas.length;
    console.log(cantidadNueva);
    const url = "https://thingproxy.freeboard.io/fetch/https://api.deezer.com/chart/0/artists?index="+ cantidadNueva +"&limit=10" ;
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        this.setState({
          artistas: this.state.artistas.concat(data.data),
          artistasFilter: this.state.artistasFilter.concat(data.data),
        });
      })
      .catch((err) => console.log(err));
  }
  
    borrarTarjeta(id) {
      console.log(id);
      const restoDeArtistas = this.state.artistas.filter((artista) => artista.id !== id);
      this.setState({
        artistas: restoDeArtistas,
      });
      console.log(restoDeArtistas.length);
    }
  
    filtrarArtistas(texto) {
      let artistasFiltrados = this.state.artistasFilter.filter((artista) =>
        artista.name.toLowerCase().includes(texto.toLowerCase())
      );
      this.setState({
        artistas: artistasFiltrados,
      });
    }

  componentDidUpdate() {
    console.log("component did update");
    
  }

  componentWillUnmount() {
    console.log("component wil unmount");
  }
  
  render() {
return (
      <>
        <div className='container-cards'>
          <div className="row align">
          {this.state.cargando === false ? 
            <i className='fas fa-spinner fa-spin'></i>
           : 
            this.state.artistas.map((artista, i) => (
              <Tarjeta
                changeOrder={this.props.changeOrder}
                key={artista.id + i}
                datosArtista={artista}
                borrar={(ArtistaBorrar) =>
                  this.borrarTarjeta(ArtistaBorrar)
                }
              />
            ))
          }
          </div>
          {/* botón para cargar más artistas */}
          <button className="cargarArtistas" onClick={() => this.agregarArtistas()}>
            <i className="fas fa-chevron-down"></i>
          </button>
        </div>
      </>
    );
  }
}



export default Artistas;