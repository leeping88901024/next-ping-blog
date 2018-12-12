import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import './index.scss'

import installFontAwesome from '../../api/installFontAwesome'
installFontAwesome();

if (typeof window !== 'undefined') {
  // Make scroll behavior of internal links smooth
  require('smooth-scroll')('a[href*="#"]', {
    offset: 60,
  });
}

const Layout = ({ children, location }) => (
  <div>
    <div className="layout">
      <Navbar location={location} />
      <div className="container-fluid">{children}</div>
      <Footer />
    </div>
  </div>
);

export default Layout;
