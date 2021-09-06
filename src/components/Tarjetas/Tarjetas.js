import React, { Component } from "react";
import "./Tarjetas.css";


class Tarjeta extends Component {
  constructor(props) {
      super(props);
      this.state = {
        viewMore: false,
        text:'Ver más',
        id: props.id,
        selected: false,
    }
  }

  viewMore(evento) {
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
    console.log(this.props.id);
  
  return (
    <div className="artist-card">
      <div className="artist-card-image">
        <img src={this.props.imagen} alt="artist" />
      </div>
      <div className="artist-card-content">
        <h3 className='extra'>{this.props.nombre}</h3>
        <p className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}>Este artista actualmente esta en la posición {this.props.posicion}♞ del mundo</p>
      </div>
      <p className='more' onClick={()=>this.viewMore()}>{this.state.text}</p>
      <button onClick={() => this.borrar(this.props.id)}>Borrar</button>
    </div>
  );
  }
}

export default Tarjeta;