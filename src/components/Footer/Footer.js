import React from "react";
import DarkLight from "../Navbar/DarkLight";

function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="footer__content">
          <div class="footer__content-item">
            <a href="" class="footer__logo">
              <img src="./img/svg/logo.svg" alt="" />
            </a>
            <DarkLight />
          </div>
          <ul class="navbar__list">
            <li class="navbar__item">
              <a href="" class="navbar__link">
                Услуги
              </a>
            </li>
            <li class="navbar__item">
              <a href="" class="navbar__link">
                Портфолио
              </a>
            </li>
            <li class="navbar__item">
              <a href="" class="navbar__link">
                Команда
              </a>
            </li>
            <li class="navbar__item">
              <a href="" class="navbar__link">
                О нас
              </a>
            </li>
          </ul>
          <div class="footer__social">
            <a href="" class="footer__social-link">
              <img src="./img/svg/facebook.svg" alt="" />
            </a>
            <a href="" class="footer__social-link">
              <img src="./img/svg/instagram.svg" alt="" />
            </a>
            <a href="" class="footer__social-link">
              <img src="./img/svg/vk.svg" alt="" />
            </a>
            <a href="" class="footer__social-link">
              <img src="./img/svg/telegram.svg" alt="" />
            </a>
          </div>
          <div class="footer__language">
            <a href="" class="footer__language-link">
              <img src="./img/svg/russia.svg" alt="" />
            </a>
            <a href="" class="footer__language-link">
              <img src="./img/svg/usa.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
