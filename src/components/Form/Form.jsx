import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { createUser } from '../../api/helpers';
import { getPositions } from '../../api/positions';
import './Form.scss';

export const Form = () => {
  const [positions, setPositions] = useState([]);
  const [positionID, setPositionID] = useState(null);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    getPositions()
      .then((data) => {
        setPositions(data.positions);
      });
  }, [setPositions]);

  const handlerChange = (event) => {
    const { name, value } = event.target;

    if (name === 'name') {
      setUserName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'phone') {
      setPhone(value);
    }
  };

  const selectPosition = (event) => {
    const { value } = event.target;

    setPositionID(+value);
  };

  const submitUser = (event) => {
    event.preventDefault();

    createUser(userName, email, phone, positionID, photo);

    if (!userName || !email || !phone || !positionID || !photo) {
      setError(true);
    } else {
      setUserName('');
      setEmail('');
      setPhone('');
      setPhoto(null);
      setError(false);
    }
  };

  const fileSelectedHandler = (event) => {
    setPhoto(event.target.files[0]);
  };

  return (
    <section className="form" id="singup">
      <div className="form__container">
        <h1 className="form__title">
          Register to get a work
        </h1>
        <p className="form__details">
          Attention! After successful registration and alert, update the
          list of the users in the block from the top
        </p>

        <form className="form__registration" onSubmit={submitUser}>
          <label htmlFor="name">
            <p className="form__legend">
              Name
            </p>
            <input
              type="text"
              className={classNames(
                `form__input`, { 'form__input--error': error === true },
              )}
              name="name"
              id="name"
              value={userName}
              placeholder="Your name"
              onChange={handlerChange}
            />
          </label>

          <label htmlFor="email">
            <p className="form__legend">
              Email
            </p>
            <input
              type="text"
              className={classNames(
                `form__input`, { 'form__input--error': error === true },
              )}
              name="email"
              id="email"
              value={email}
              placeholder="Your email"
              onChange={handlerChange}
            />
          </label>

          <label htmlFor="phone">
            <p className="form__legend">
              Phone number
            </p>
            <input
              type="text"
              className={classNames(
                `form__input`, { 'form__input--error': error === true },
              )}
              name="phone"
              id="phone"
              value={phone}
              placeholder="+380 XX XXX XX XX"
              onChange={handlerChange}
            />
            <p className="form__advice">
              Enter phone number in open format
            </p>
          </label>

          <div className="form__radio-btn">
            <p className="form__select-text">
              Select your position
            </p>
            {positions.map(position => (
              <label key={position.id} htmlFor={position.name}>
                <input
                  className="form__radio-input"
                  type="radio"
                  name="position"
                  id={position.name}
                  required
                  value={position.id}
                  onClick={selectPosition}
                />
                {position.name}
              </label>
            ))}
          </div>
          <p className="form__legend--resized">
            Photo
          </p>
          <div className="custom-file form__file">
            <input
              type="file"
              id="photo"
              onChange={fileSelectedHandler}
            />
            <label
              className={classNames(
                `custom-file-label`,
                { 'custom-file-label--error': error === true },
              )}
              htmlFor="photo"
            >
              {!photo ? 'Upload your photo' : photo.name}
              <button
                type="button"
                className="custom-file-label__btn"
              >
                Browse
              </button>
            </label>
          </div>

          <button type="submit" className="form__button">
            Sing up now
          </button>
        </form>
      </div>
    </section>
  );
};
