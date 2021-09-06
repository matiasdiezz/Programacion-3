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
        console.log(data);
        this.setState({
          cargando: true,
          artistas: data,
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
    const resto = this.state.artistas.filter(
      (artista) => artista.id != id
    );
    this.setState({
      artistas: resto,
    });
  }
  render() {
    console.log("renderizado");
    console.log(this.state.artistas);
return (
      <>
        <div className="row align">
          {this.state.cargando ? (
            this.state.artistas.data.map((artista) => (
              <Tarjeta
                key={artista.id}
                id={artista.id}
                nombre={artista.name}
                imagen={artista.picture_medium}
                posicion={artista.position}
              />
            ))
          ) : (
            <h1>Cargando...</h1>
          )}
        </div>
      </>
    );
  }
}


export default Artistas;