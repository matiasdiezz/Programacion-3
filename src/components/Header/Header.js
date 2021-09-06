import './Header.css';
import React from 'react';
function Header(){
    return(
    //    <!-- Topbar -->
				<nav className='topBar'>
                    <h1 className='tituloTb'>
                    <i class="fab fa-old-republic"></i>
                    </h1>
                    <div className='ordenarTb'>
                        <p>Ordenar por</p>
                        <div className='botonesTb'>
                            <button className='ascTb'><i class="fas fa-angle-double-up"></i></button>
                            <button className='descTb'><i class="fas fa-angle-double-down"></i></button>
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