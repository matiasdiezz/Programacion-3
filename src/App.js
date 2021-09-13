import React, {Component} from "react";
import Header from "./Components/Header/Header";
import Artistas from "./Components/TarjetasArtistas/TarjetasArtistas";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      changeOrder: false
    }
    console.log(this.state);
  }

  changeOrder(evento) {
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
      <Header changeOrder= {(param)=>this.changeOrder(param)} />
      </div>
      <div className='contenedor'>
      <Artistas/>
      </div>
    </div>
  );
}
}




export default App;
