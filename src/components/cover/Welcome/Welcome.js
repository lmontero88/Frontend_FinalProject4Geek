import React from 'react';
import './Welcome.scss';

const Welcome = () => {
  return (
    <div className="row inline-block d-block p-2 ">
      <h1>Bienvenido a MatchUp<i class="fas fa-running"></i></h1>
      <h2>¡Encuentra con quien jugar! <i class="fas fa-basketball-ball"></i></h2>
      <h2>Compra y vende artículos<i class="fas fa-shopping-cart"></i></h2>
    </div>
  )
}

export default Welcome
