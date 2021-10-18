import React, { Component } from "react";
import "./Tarjetas.css";

class Tarjeta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewMore: false,
      text:'Ver más',
    }
  }
  
  viewMore() {
    if(this.state.viewMore){
      this.setState({
        viewMore: false,
        text: 'Ver más',
      })
    } else {
      this.setState({
        viewMore: true,
        text: 'Ver menos',
      })            
    }
  }

  render() {
    const {picture_big, name, position, id} = this.props.datosArtista;
  return (
    <>
      {this.props.changeOrder === false ?
       <article className="artist-card">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
        {/*tarjetas verticales*/}
        <div className="artist-card-image">
          <img src={picture_big} alt="artist" />
        </div>
        <div className="artist-card-content">
          <h3 className='extra'>{name}</h3>
          <p className={`extra ${this.state.viewMore ? 'show' : 'hide'}`}>{name} actualmente esta en la posición <strong>{position}</strong> del mundo</p>
        </div>
        <div className="card-footer">
          <p className='more' onClick={()=>this.viewMore()}>{this.state.text}</p>
          <button className='borrar' onClick={() => this.props.borrarTarjeta(id)}><i className="fas fa-trash"></i></button>
        </div>
      </article> 
      :
      <article className="artist-card-large">
        {/*tarjetas horizontales*/}
        <div className="artist-card-image-large">
          <img src={picture_big} alt="artist" />
        </div>
        <div className="contentLarge">
          <h3 className='extra'>{name}</h3>
          <p className='extra'>{name} actualmente esta en la posición <strong>{position}</strong> del mundo</p>
        </div>
        <div className="footerLarge">
          <button className='borrar' onClick={() => this.props.borrarTarjeta(id)}><i className="fas fa-trash"></i></button>
        </div>
      </article>  
      }
  </>
 
   );
  }
}

export default Tarjeta;