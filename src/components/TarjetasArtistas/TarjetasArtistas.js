import React, { Component } from 'react'
import Tarjeta from '../Tarjetas/Tarjetas';

class Artistas extends Component {
  constructor() {
    super();
    this.state = {
      artistas: [],
      cargando: false,
    };
  }

  componentDidMount() {
    console.log("component did mount");
    const url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists";
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        this.setState({
          cargando: true,
          artistas: data.data,
        });
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component wil unmount");
  }

  borrarTarjeta(id) {
    console.log(id);
    const restoDeArtistas = this.state.artistas.filter((artista) => artista.id !== id);
    this.setState({
      artistas: restoDeArtistas,
    });
  }
  render() {
    console.log(this.state.artistas);
return (
      <>
        <div className="row align">
          {this.state.cargando === false ? 
            <i className='fas fa-spinner fa-spin'></i>
           : 
            this.state.artistas.map((artista, i) => (
              <Tarjeta
                key={artista.id + i}
                datosArtista={artista}
                borrar={(ArtistaBorrar) =>
                  this.borrarTarjeta(ArtistaBorrar)
                }
              />
            ))
          }
        </div>
      </>
    );
  }
}


export default Artistas;