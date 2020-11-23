import React from 'react';
import './Menu.scss';

const menuItems = [
  'About me', 'Relationships', 'Users', 'Sing Up',
  'Terms and Conditions', 'How it works', 'Partnership',
  'Help', 'Leave testimonial', 'Contact us', 'Articles',
  'Our news', 'Testimonials', 'Licences', 'Privacy Policy',
];

export const Menu = () => (
  <ul className="menu">
    {menuItems.map(item => (
      <li className="menu__item">
        <a href="/#" className="menu__link">
          {item}
        </a>
      </li>
    ))}
  </ul>
);
