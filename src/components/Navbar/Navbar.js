import "../../style.scss";
import logo from "../../img/svg/logo.svg";
import { Link } from "react-router-dom";
import DarkLight from "./DarkLight";
import BurgerMenu from "./BurgerMenu";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__content">
          <div className="navbar__content-item">
            <a href="" className="logo__link">
              <img src={logo} alt="" className="logo__img" />
            </a>
            <p className="navbar__text">
              Аутсориснг <br />
              веб-разработки
            </p>
            <DarkLight />
          </div>
          <ul className="navbar__list">
            <li className="navbar__item">
              <Link className="navbar__link" to="/">
                Услуги
              </Link>
            </li>
            <li className="navbar__item">
              <Link className="navbar__link" to="/Blog">
                Портфолио
              </Link>
            </li>
            <li className="navbar__item">
              <Link className="navbar__link" to="/">
                Команда
              </Link>
            </li>
            <li className="navbar__item">
              <Link className="navbar__link" to="/">
                О нас
              </Link>
            </li>
          </ul>
          <div className="navbar__phones">
            <a href="" className="navbar__phone">
              +7 (923) 370-78-25
            </a>
            <a href="" className="navbar__phone-btn">
              Позвоните мне
            </a>
          </div>
          <BurgerMenu />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
