import React, {Component} from "react";
import Header from "./Components/Header/Header";
import Artistas from "./Components/TarjetasArtistas/TarjetasArtistas";
import Footer from "./Components/Footer/Footer";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      artistasFilter: [],
      artistas: [],
      cargando: false,
      textoFiltrar: "",
      changeOrder: false
    }
    console.log(this.state);
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
      const restoDeArtistas = this.state.artistas.filter((artista) => artista.id !== id);
      this.setState({
        artistas: restoDeArtistas,
      });
      console.log(restoDeArtistas.length);
    }
  
    filtrarArtistas(texto) {
      let artistasFiltrados = 
      this.state.artistasFilter.filter((artista) => artista.name.toLowerCase().includes(texto.toLowerCase()));
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
  changeOrder() {
    if(this.state.changeOrder){
      this.setState({
        changeOrder: false,
      })
    } else {
      this.setState({
        changeOrder: true,
      })            
    }
  }


  render (){
  return (
    <>
      <header>
      <Header changeOrder= {()=>this.changeOrder()} filtrarArtistas={(
        texto)=>this.filtrarArtistas(texto)} changeButton= {this.state.changeOrder}/>
      </header>
      <main className='contenedor'>
      <Artistas   artistasFilter= {this.state.artistasFilter}   agregarArtistas= {()=>this.agregarArtistas()}    borrarTarjeta= {()=>this.borrarTarjeta()}     filtrarArtistas= {()=>this.filtrarArtistas()}   cargando= {this.state.cargando}  artistas= {this.state.artistas} changeOrder= {this.state.changeOrder} />
      </main>
      <footer>
        <Footer/> 
      </footer>
    
    </>
  );
}
}




export default App;
