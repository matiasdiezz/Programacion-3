import './Header.css';
import React, {Component} from 'react';

class Header extends Component {
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
  
    render()
    {
    return(
    //    <!-- Topbar -->
				<nav className='topBar'>
                    <h1 className='tituloTb'>
                        <a href='/'>
                    <i className="fab fa-old-republic"></i>
                    </a>
                    </h1>
                    <div className='searchTb'>
                        <form onSubmit={(event)=>this.evitarSubmit(event)}>
                        <input type="text" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} placeholder='Buscar...'/>
                    </form>
                    </div>
                    <div className='ordenarTb'>
                        <p>Cambiar Orden</p>
                        <div className='botonesTb'>
                            {this.props.changeButton === false ?
                            <button className='squareTb'  onClick={()=>this.props.changeOrder()}><i className="far fa-square"></i></button>
                            :
                            <button className='stripsTb'  onClick={()=>this.props.changeOrder()} ><i className="fas fa-bars"></i></button>
                            }
                        </div>
                    </div>
                </nav>
            

	// <!-- End of Topbar -->  */
    )

    }
}

export default Header