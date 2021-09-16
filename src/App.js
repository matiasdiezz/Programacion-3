import React, {Component} from "react";
import Header from "./Components/Header/Header";
import Artistas from "./Components/TarjetasArtistas/TarjetasArtistas";


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
    <div>
      <div>
      <Header changeOrder= {()=>this.changeOrder()} filtrarArtistas={(
        texto)=>this.filtrarArtistas(texto)} changeButton= {this.state.changeOrder}/>
      </div>
      <div className='contenedor'>
      <Artistas  changeOrder= {this.state.changeOrder} filtrarArtistas={this.state.filtrarArtistas}/>
      </div>
    </div>
  );
}
}




export default App;
