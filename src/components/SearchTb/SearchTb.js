import React, { Component } from 'react';
import './SearchTb.css'

class Formulario extends Component {
    constructor(props) {
      super(props);
      this.state = {filterBy:'',};
    }
  
    evitarSubmit(event) {
      event.preventDefault();
    }
  
    controlarCambios(event) {
      this.setState({filterBy: event.target.value},
      ()=> this.props.filtrarArtistas(this.state.filterBy)
    );
    }
  
    render() {
      return (
        <div className='searchTb'>
          <form onSubmit={(event)=>this.evitarSubmit(event)}>
            <input type="text" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} placeholder='Buscar...'/>
          </form>
       </div>
      );
    }
  }
export default Formulario;
