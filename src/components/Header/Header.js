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
                    <SearchTb textoFiltrar={(texto)=>props.textoFiltrar(texto)} />
                    <div className='ordenarTb'>
                        <p>Cambiar Orden</p>
                        <div className='botonesTb'>
                            {props.changeButton === false ?
                            <button className='squareTb'  onClick={()=>props.changeOrder()}><i className="far fa-square"></i></button>
                            :
                            <button className='stripsTb'  onClick={()=>props.changeOrder()} ><i className="fas fa-bars"></i></button>
                            }
                        </div>
                    </div>
                </nav>
                
	// <!-- End of Topbar -->  */
    )
}

export default Header