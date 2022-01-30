import React from 'react';
import { Link } from 'react-router-dom';

const NavBarPublic = () => {
  return (
    <header>
      <div className='header-public'>
        <nav>
          <Link to="/">
            <h1>remindMe</h1>
          </Link>
          <ul>
            <Link to="/login">
              <li>Login</li>
            </Link>
            <Link to="/register">
              <li>Register</li>
            </Link>
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default NavBarPublic;
