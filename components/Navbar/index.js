import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import NavItem from './NavItem/'
import './index.scss'
import config from '../../config'

const { navbarList } = config;

const NavbarClass = [
  'navbar',
  'navbar-expand-md',
  'sticky-top',
  'custom-navbar',
];

const Navbar = () => (
  <nav id="m-navbar" className={`${NavbarClass.join(' ')} navbar-night`}>
    <div className="container">
      <button
        type="button"
        className="navbar-brand btn btn-default"
        onClick={() => {
        }}
      >
        <span className="brand-logo">Ping</span>
        &apos;s Blog
      </button>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div
        className="collapse navbar-collapse flex-row-reverse"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-2">
          {navbarList.map(item => (
            <NavItem
              url={item.href}
              name={item.title}
              key={item.href}
            />
          ))}
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
