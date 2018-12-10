import React from 'react'
import Router from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import NavItem from './NavItem/'
import './index.scss'
import { navbarList, gitRepository } from '../../config'

import GithubCorner from '../GithubCorner'

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
            onClick={() => Router.push('/')}
            className="navbar-brand btn"
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
      <GithubCorner url={gitRepository} />
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
