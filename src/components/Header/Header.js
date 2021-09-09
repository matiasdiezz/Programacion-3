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
                            <button className='ascTb'><i className="fas fa-angle-double-up"></i></button>
                            <button className='descTb'><i className="fas fa-angle-double-down"></i></button>
                            <button className='stripsTb'><i className="fas fa-bars"></i></button>
                            <button className='squareTb'><i className="far fa-square"></i></button>
                        </div>
                    </div>
                </nav>
	// <!-- End of Topbar -->  */
    )
}

export default Header