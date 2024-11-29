import React, { useState } from "react";
import { Link } from "react-router-dom";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Кнопка-бургер */}
      <div
        className={`burger-icon ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Полноэкранное меню */}
      <div className={`fullscreen-menu ${isOpen ? "show" : ""}`}>
        <ul className="fullscreen-menu__list">
          <li className="fullscreen-menu__item">
            <Link className="navbar__link" to="/">
              Услуги
            </Link>
          </li>
          <li className="fullscreen-menu__item">
            <Link className="navbar__link" to="/Blog">
              Портфолио
            </Link>
          </li>
          <li className="fullscreen-menu__item">
            <Link className="navbar__link" to="/">
              Команда
            </Link>
          </li>
          <li className="fullscreen-menu__item">
            <Link className="navbar__link" to="/">
              О нас
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default BurgerMenu;
