import React from "react";
import useAuth from "../../../hooks/useAuth";
import { logout } from "../../../services/authService";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

function Navbar() {
  const { setRefresh } = useAuth();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    setRefresh(true);
    toast.success("Su sesión ha sido cerrada.");
  };

  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown no-arrow">
          <div
            className="nav-link dropdown-toggle"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
              Hi, Tod@s
            </span>
            <img
              className="img-profile rounded-circle"
              src="https://place-hold.it/150"
              alt="profileImage"
            />
          </div>
          <div
            className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
            aria-labelledby="userDropdown"
          >
            <NavLink className="dropdown-item" to="/perfil">
              <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
              Perfil
            </NavLink>
            <NavLink className="dropdown-item" to="/mis_publiaciones">
              <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
              Mis Publicaciones
            </NavLink>
            <NavLink className="dropdown-item" to="/mis_match">
              <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
              Mis Matchs
            </NavLink>
            <div className="dropdown-divider"></div>
            <button className="dropdown-item" onClick={handleLogout}>
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
              Cerrar Sección
            </button>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
