import React, { Component } from "react";
import "./Tarjetas.css";

class Tarjeta extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      viewMore: false,
      text:'Ver más',
      datosArtista: props.datosArtista,
      selected: false,
    }
    console.log(this.state);
  }
  
  viewMore(evento) {
    if(this.state.viewMore){
      this.setState({
        viewMore: false,
        text: 'Ver más',
        selected: true,
      })
    } else {
      this.setState({
        viewMore: true,
        text: 'Ver menos',
        selected: false,
      })            
    }
  }

  render() {
    const {picture_big, name, position, id, changeOrder} = this.props.datosArtista;
  return (
    <>
      {this.props.changeOrder === false ?
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
      :
      <div className="artist-card-large">
    <div className="artist-card-image-large">
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
      }
  </>
 
   );
  }
}

export default Tarjeta;