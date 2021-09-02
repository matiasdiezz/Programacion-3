import './Header.css';
import React from 'react';
function Header(){
    return(
    //    <!-- Topbar -->
				<nav className='topBar'>
                    <h1 className='tituloTb'>
                        Progra3
                    </h1>
                    <div className='ordenarTb'>
                        <p>Ordenar</p>
                        <div className='botonesTb'>
                        <button className='ascTb'>Asc</button>
                        <button className='descTb'>Desc</button>
                        <button className='stripsTb'><i class="fas fa-bars"></i></button>
                        <button className='squareTb'><i class="far fa-square"></i></button>
                        </div>
                    </div>
                    <div className='searchTb'>
                    <input type="text" placeholder="Search.."></input>
                    </div>

                </nav>
	// <!-- End of Topbar -->  */
    )
}

export default Header