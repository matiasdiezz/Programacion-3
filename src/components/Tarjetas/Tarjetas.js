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
    const {picture_big, name, position, id} = this.props.datosArtista;
  
  return (
    <div className="artist-card">
      <div className="artist-card-image">
        <img src={picture_big} alt="artist" />
      </div>
      <div className="artist-card-content">
        <h3 className='extra'>{name}</h3>
        <p className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}>{name} actualmente esta en la posición <strong>{position}</strong> del mundo</p>
      </div>
      <div className="card-footer">
      <p className='more' onClick={()=>this.viewMore()}>{this.state.text}</p>
      <button className='borrar' onClick={() => this.props.borrar(id)}><i className="fas fa-trash"></i></button>
      </div>
    </div>
  );
  }
}

export default Tarjeta;