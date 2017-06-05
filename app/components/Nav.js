import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
      <div className="header">
          <div className="title">
              <h1>Online Store</h1>
          </div>
          <div className="nav">
              <ul className='nav'>
                <li>
                  <NavLink exact activeClassName='active' to='/'>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName='active' to='/order'>
                    Order
                  </NavLink>
                </li>
                <li>
                  <NavLink activeClassName='active' to='/inventory'>
                   Inventory
                  </NavLink>
                </li>
              </ul>
          </div>


      </div>

  );
}

export default Nav;
