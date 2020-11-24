import React from 'react';
import './Menu.scss';

const menuItems = [
  'About me', 'Relationships', 'Users', 'Sing Up',
  'Terms and Conditions', 'How it works', 'Partnership',
  'Help', 'Leave testimonial', 'Contact us', 'Articles',
  'Our news', 'Testimonials', 'Licences', 'Privacy Policy',
];

let count = 0;

export const Menu = () => (
  <ul className="menu">
    {menuItems.map((item) => {
      count += 1;

      if (count % 5 === 0) {
        return (
          <li className="menu__item">
            <a href="/#" className="menu__link">
              {item}
            </a>
            <hr />
          </li>
        );
      }

      return (
        <li className="menu__item">
          <a href="/#" className="menu__link">
            {item}
          </a>
        </li>
      );
    })}
  </ul>
);
