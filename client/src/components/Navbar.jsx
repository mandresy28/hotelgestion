/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "./Style/Navbar.scss";

function Navbar() {
  return (
    <>
        <nav className='nav-wrapper'>
            <div className='nav-content'>
                <img className="logo" src="/client/src/public/images/Logo.png" alt="logo" />
                <ul>
                    <li>
                        <a className='menu-item' href="">Home</a>
                    </li>
                    <li>
                        <a className='menu-item' href="">Chambre</a>
                    </li>
                    <li>
                        <a className='menu-item' href="">Restaurent</a>
                    </li>
                    <li>
                        <a className='menu-item' href="">Salle</a>
                    </li>
                    <li>
                        <a className='menu-item' href="">traiteur</a>
                    </li>
                    <li>
                        <a className='menu-item' href="">Auxiliaire</a>
                    </li>


                <button className='contact-btn' onClick={() => {}}>
                    Inscription
                    </button>
                    <button className='contact-btn'onClick={() => {}}>
                    Contactez-nous
                    </button>                   
                </ul>
                <button className='menu-btn' onClick={() => {}}>
                    <span
                    class={"material-symbol-outlined"}
                    style={{ fontSize: "1.8rem" }}
                    >
                        menu
                    </span>
                </button>
            </div>
        </nav>
    </>
  )
}

export default Navbar