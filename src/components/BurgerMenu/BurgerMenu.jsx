import React from 'react';
import PropTypes from 'prop-types';
import burger from '../../images/menu.svg';
import './BurgerMenu.scss';

export const BurgerMenu = ({ setMenu, menu }) => {
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <button type="button" className="burger" onClick={toggleMenu}>
      <img
        className="menu__icon"
        src={burger}
        alt="menu"
      />
    </button>
  );
};

BurgerMenu.propTypes = {
  setMenu: PropTypes.func.isRequired,
  menu: PropTypes.bool.isRequired,
};
