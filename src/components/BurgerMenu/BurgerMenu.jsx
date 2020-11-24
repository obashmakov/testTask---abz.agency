import React from 'react';
import PropTypes from 'prop-types';
import './BurgerMenu.scss';

export const BurgerMenu = ({ setMenu, menu }) => {
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <button type="button" className="burger" onClick={toggleMenu}>
      <img
        className="menu__icon"
        src="/images/menu icon.svg"
        alt="menu"
      />
    </button>
  );
};

BurgerMenu.propTypes = {
  setMenu: PropTypes.func.isRequired,
  menu: PropTypes.bool.isRequired,
};
