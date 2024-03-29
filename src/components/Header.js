import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';


class Header extends Component {
  render() {
    return (
      <header>
        <div className="container h-flex">
          <Link to="/" className="logo">
            <img src={logo} alt="logo"></img>
          </Link>
          <nav className="links">
            <ul>
              <li>
                <Link to="/" className="menu__links">Лента</Link>
              </li>
              <li>
                <Link href="/profile" className="menu__links">Профиль</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header;