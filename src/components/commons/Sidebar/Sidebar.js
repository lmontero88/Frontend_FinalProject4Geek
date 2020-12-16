import React, { useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Sidebar.scss';

function Sidebar() {

    const sideBarRef = useRef(null);

    const handleToggleSidebar = () => {
        sideBarRef.current.classList.toggle('toggled')
    }

    return (
        <div>
            <ul ref={sideBarRef} className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion sticky-top" id="accordionSidebar">

                <Link to="/" className="sidebar-brand d-flex align-items-center justify-content-center">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-basketball-ball"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Match <sup>up</sup></div>
                </Link>

                <hr className="sidebar-divider my-0" />

                <NavLink className="nav-item text-decoration-none" to="/match" activeClassName="active">
                    <div className="nav-link">
                        <i className="fas fa-user-friends"></i>
                        <span>Jugadores</span>
                    </div>
                </NavLink>

                <hr className="sidebar-divider" />

                <NavLink className="nav-item text-decoration-none" to="/profesores" activeClassName="active">
                    <div className="nav-link">
                        <i className="fas fa-chalkboard-teacher"></i>
                        <span>Profesores</span>
                    </div>
                </NavLink>

                <hr className="sidebar-divider" />

                <NavLink className="nav-item text-decoration-none" to="/clasificados" activeClassName="active">
                    <div className="nav-link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>Clasificados</span>
                    </div>
                </NavLink>

                <hr className="sidebar-divider" />

                <li className="nav-item text-decoration-none" id="navFav">
                    <p className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                        aria-expanded="true" aria-controls="collapseTwo">
                        <i className="fas fa-fw fa-cog"></i>
                        <span>Favoritos</span>
                    </p>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <NavLink className="collapse-item" to="/favorito/jugadores">Jugadores</NavLink>
                            <NavLink className="collapse-item" to="/favorito/profesores">Profesores</NavLink>
                            <NavLink className="collapse-item" to="/favorito/clasificados">Clasificados</NavLink>
                        </div>
                    </div>
                </li>


                <hr className="sidebar-divider d-none d-md-block" />

                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle" onClick={handleToggleSidebar}></button>
                </div>


                
            </ul>
        </div>
    )
}

export default Sidebar
