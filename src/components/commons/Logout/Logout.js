import React from 'react';
import { toast } from 'react-toastify';
import useAuth from '../../../hooks/useAuth';
import { logout } from '../../../services/authService';

const Logout = () => {
  const { setRefresh } = useAuth();

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    setRefresh(true);
    toast.success("Se sesión ha sido cerrada.");
  }

  return (
    <div>
      <button className="btn btn-success" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout;
