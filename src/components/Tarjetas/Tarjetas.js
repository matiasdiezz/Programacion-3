import React, { Component } from "react";
import "./Tarjetas.css";

class Tarjeta extends Component {
  constructor(props) {
      super(props);
      this.state = {
        viewMore: false,
        text:'Ver más',
        selected: false,
    }
  }

  viewMore(evento) {
      // No hace falta que el método viewMore reciba un parametro (evento) para resolver la ejercitación. Lo podemos sacar de acá y de las funciones que están como valor del onClick. Lo dejo para que les quede el ejemplo que dimos anteriormente

      // Ejemplo dado al principio para mostrar como podríamos rescatar el evento y todas sus propiedades. Lo usamos para rescatar el valor que había dentro de la etiqueta de apertura y clausura de nuestra etiqueta p al momento de accionar el evento onClick
      // alert(evento.target.textContent);

      if(this.state.viewMore){
        this.setState({
            viewMore: false,
            text: 'Ver más'
        })
    } else {
        this.setState({
            viewMore: true,
            text: 'ver menos'
        })            
    }
  }

  render() {
  return (
    <div className="artist-card"> 
      <img src="assets/images/dummy-avatar.jpg" alt="imagen" />
      <h3>Nombre Artista</h3>
      <p className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}>Las cosas del artista</p>
      <p className='more' onClick={()=>this.viewMore()}>{this.state.text}</p>
    </div>
  );
}
}

export default Tarjeta;