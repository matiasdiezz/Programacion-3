import React, {Component} from "react";
import Header from "./Components/Header/Header";
import Artistas from "./Components/TarjetasArtistas/TarjetasArtistas";
import Footer from "./Components/Footer/Footer";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      changeOrder: false,
      filtrarArtistas:""
    }
    console.log(this.state);
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

  filtrarArtistas(texto){
    this.setState({
      filtrarArtistas: texto
    })
  }


  render (){
  return (
    <>
      <header>
      <Header changeOrder= {()=>this.changeOrder()} filtrarArtistas={(
        texto)=>this.filtrarArtistas(texto)} changeButton= {this.state.changeOrder}/>
      </header>
      <main className='contenedor'>
      <Artistas  changeOrder= {this.state.changeOrder} filtrarArtistas={this.state.filtrarArtistas}/>
      </main>
      <footer>
        <Footer/> 
      </footer>
    
    </>
  );
}
}




export default App;
