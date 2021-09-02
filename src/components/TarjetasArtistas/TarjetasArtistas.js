import React, { Component } from 'react'
import Tarjeta from '../Tarjetas/Tarjetas';

class Artistas extends Component {
  constructor() {
    super();
    this.state = {
      originales: [],
      artistas: [],
      
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
          originales: data.results,
          artistas: data.results,
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
  render() {
    console.log("renderizado");
    console.log(this.state.personajes);
return (
      <>
        <div className="row card-container">
          
            <Tarjeta/>
          
        </div>
      </>
    );
  }
}


export default Artistas;