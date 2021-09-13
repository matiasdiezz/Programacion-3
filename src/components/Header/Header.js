import './Header.css';
import React from 'react';

function Header(props) {
    return(
    //    <!-- Topbar -->
				<nav className='topBar'>
                    <h1 className='tituloTb'>
                        <a href='/'>
                    <i className="fab fa-old-republic"></i>
                    </a>
                    </h1>
                    <div className='ordenarTb'>
                        <p>Ordenar por</p>
                        <div className='botonesTb'>
                            <button className='stripsTb'  onClick={()=>this.changeOrder()} ><i className="fas fa-bars"></i></button>
                            <button className='squareTb'  onClick={()=>this.changeOrder()}><i className="far fa-square"></i></button>
                        </div>
                    </div>
                </nav>
	// <!-- End of Topbar -->  */
    )
}

export default Header