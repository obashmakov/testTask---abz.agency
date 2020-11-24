import React, { useState } from 'react';
import { BurgerMenu } from '../BurgerMenu';
import { Menu } from '../Menu';
import logo from '../../images/logo.svg';
import './Header.scss';

export const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <nav className="nav">
        <img
          className="nav_logo"
          src={logo}
          alt="Webpage-logo"
        />
        {menu && (
          <Menu />
        )}
        <BurgerMenu setMenu={setMenu} menu={menu} />
        <div className="nav__container">
          <ul className="nav__list list">
            <li className="list__item">
              <a className="list__link" href="/testTask-abz.agency/#">
                About me
              </a>
            </li>
            <li className="list__item">
              <a className="list__link" href="/testTask-abz.agency/#">
                Relationships
              </a>
            </li>
            <li className="list__item">
              <a
                className="list__link"
                href="/testTask-abz.agency/#requirements"
              >
                Requirements
              </a>
            </li>
            <li className="list__item">
              <a className="list__link" href="/testTask-abz.agency/#users">
                Users
              </a>
            </li>
            <li className="list__item">
              <a className="list__link" href="/testTask-abz.agency/#singup">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <header className="header">
        <div className="header__info">
          <div className="header__img">
            <div className="header__heading">
              <h1>Test assignment for frontend developer position</h1>
            </div>
            <p className="header__text">
              We kindly remind you that your test assignment should be submitted
              as a link to github/bitbucket repository. Please be patient, we
              consider and respond to every application that meets minimum
              requirements. We look forward to your submission. Good luck!
              The
              photo has to scale in the banner area on the different screens.
            </p>
            <p className="header__text-mobile">
              We kindly remid you that your test assignment
              should be submitted as a link to github/bitbucket repository.
            </p>
            <a href="/testTask-abz.agency/#singup">
              <button className="header__button" type="button">
                Sing up now
              </button>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
