import React from 'react';
import './Header.scss';

export const Header = () => (
  <header className="header">
    <nav className="header__nav nav">
      <img
        className="nav_logo"
        src="/images/logo.svg"
        alt="Webpage-logo"
      />
      <div className="nav__container">
        <ul className="nav__list list">
          <li className="list__item">
            <a className="list__link" href="/#">
              About me
            </a>
          </li>
          <li className="list__item">
            <a className="list__link" href="/#">
              Relationships
            </a>
          </li>
          <li className="list__item">
            <a className="list__link" href="/#">
              Requirements
            </a>
          </li>
          <li className="list__item">
            <a className="list__link" href="/#">
              Users
            </a>
          </li>
          <li className="list__item">
            <a className="list__link" href="/#">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>

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
          The photo has to scale in the banner area on the different screens.
        </p>
        <button className="header__button" type="button">
          Sing up now
        </button>
      </div>
    </div>
  </header>
);
