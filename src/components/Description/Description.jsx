import React from 'react';
import './Description.scss';

export const Description = () => (
  <section className="description" id="requirements">
    <h2 className="description__title">
      Let&lsquo;s get acquainted
    </h2>
    <div className="description__container">
      <img
        className="description__img"
        src="/images/man-laptop-v1.svg"
        alt="Man with laptop"
      />
      <div className="description__info">
        <h3 className="description__heading">
          I am cool frontend developer
        </h3>
        <p className="description__text">
          We will evaluate how clean your approach to writing CSS and Javascript
          code is. You can use any CSS and Javascript 3rd party libraries
          without any restriction.
        </p>
        <p className="description__text description__text--lower">
          If 3rd party css/javascript libraries are added to the project via
          browser/npm/yarn you will get bonus points. If you use any task runner
          (gulp/webpack) you will get bonus points as well. Slice service
          directory page PSD mockup into HTML5/CSS3.
        </p>
        <a className="description__link" href="/#singup">Sing up now</a>
      </div>
    </div>
  </section>
);
