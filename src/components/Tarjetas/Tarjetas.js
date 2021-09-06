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
  
  return (
    <div className="artist-card">
      <div className="artist-card-image">
        <img src={this.props.imagen} alt="artist" />
      </div>
      <div className="artist-card-content">
        <h3 className='extra'>{this.props.nombre}</h3>
        <p className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}>{this.props.nombre} actualmente esta en la posición {this.props.posicion}♞ del mundo</p>
      </div>
      <div className="card-footer">
      <p className='more' onClick={()=>this.viewMore()}>{this.state.text}</p>
      <button className='borrar' onClick={() => this.props.borrar(this.props.id)}><i className="fas fa-trash"></i></button>
      </div>
    </div>
  );
  }
}

export default Tarjeta;