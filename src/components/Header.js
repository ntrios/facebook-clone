import React from 'react';
import logo from '../assets/gostack-logo.png';

function Header() {
  return (  
    <header>
      <nav>
        <img src={logo} />
        <div>
          <span>Nathan Rios</span>     
          <i class="material-icons">account_circle</i>
        </div>
      </nav> 
    </header>  
  );
}

export default Header;