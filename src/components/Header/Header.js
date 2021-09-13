import './Header.css';
import React from 'react';
import SearchTb from '../SearchTb/SearchTb';

function Header(props) {
    return(
    //    <!-- Topbar -->
				<nav className='topBar'>
                    <h1 className='tituloTb'>
                        <a href='/'>
                    <i className="fab fa-old-republic"></i>
                    </a>
                    </h1>
                    <SearchTb filtrarArtistas={(param)=>this.filtrarArtistas(param)} />
                    <div className='ordenarTb'>
                        <p>Ordenar por</p>
                        <div className='botonesTb'>
                            <button className='stripsTb'  onClick={()=>props.changeOrder()} ><i className="fas fa-bars"></i></button>
                            <button className='squareTb'  onClick={()=>props.changeOrder()}><i className="far fa-square"></i></button>
                        </div>
                    </div>
                </nav>
                
	// <!-- End of Topbar -->  */
    )
}

export default Header