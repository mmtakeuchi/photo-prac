import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.styles.css';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const Menu = () => (
    <ul className="nav-links">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
        >
          Photos
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'active-link' : 'link')}
        >
          Sign In
        </NavLink>
      </li>
    </ul>
  );

  return (
    <header>
      <Link to="/" className="link">
        <h4>Photo Prac</h4>
      </Link>
      <nav className="navbar-container">
        <Menu />
      </nav>
      <nav className="navbar-mobile">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-menu-2"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <line x1="4" y1="6" x2="20" y2="6"></line>
          <line x1="4" y1="12" x2="20" y2="12"></line>
          <line x1="4" y1="18" x2="20" y2="18"></line>
        </svg>
        {toggleMenu && (
          <div className="mobile-menu">
            <Menu />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
