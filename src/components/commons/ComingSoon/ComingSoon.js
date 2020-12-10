import React from 'react';
import './ComingSoon.scss';
import MainLayout from '../../../layouts/MainLayout';

const ComingSoon = () => {
  
  return (
    
      <div className="text-center">
        <div className="error mx-auto"><i class="fas fa-wrench"></i></div>
        <p className="lead text-gray-800 mb-5">La pagina a la que intentas ingresar está en desarrollo</p>
        <p className="text-gray-500 mb-0">Tranquilo no rompiste nada</p>
        <a href="index.html">&larr; volver al inicio</a>
      </div>
    
  )
}

export default ComingSoon;
