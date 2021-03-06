import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import Link from 'next/link';

const isBrowser = () => typeof window !== 'undefined'

const NavItem = ({ url, name, list }) => {
  return (
    <Link
      prefetch
      href={url}
    >
      <a className="nav-btn" >{name}</a>
    </Link>
  );
};

NavItem.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

NavItem.defaultProps = {
  list: [],
};

export default NavItem;
