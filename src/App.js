import React, {Component} from "react";
import Header from "./Components/Header/Header";
import Artistas from "./Components/TarjetasArtistas/TarjetasArtistas";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      changeOrder: false,
      textoFiltrar:""
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

  

  

  render (){
  return (
    <div>
      <div>
      <Header changeOrder= {()=>this.changeOrder()} />
      </div>
      <div className='contenedor'>
      <Artistas  changeOrder= {this.state.changeOrder} />
      </div>
    </div>
  );
}
}




export default App;
