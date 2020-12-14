import React from 'react';
import { Link } from 'react-router-dom';
import './ComingSoon.scss';
import MainLayout from '../../../layouts/MainLayout';

const ComingSoon = () => {
  
  return (
    
      <div className="text-center mt-5">
        <div className="error mx-auto mb-4"><i className="fas fa-wrench"></i></div>
        <p className="lead text-gray-800 mb-5">La página a la que intentas ingresar está en desarrollo</p>
        <p className="text-gray-500 mb-0">Tranquilo, no rompiste nada</p>
        <Link to="/">&larr; volver al inicio</Link>
      </div>
    
  )
}

export default ComingSoon;
