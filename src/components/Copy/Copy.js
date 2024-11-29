import React from "react";

function Copy() {
  return (
    <div class="footer__copy">
      <div class="footer__copy-content">
        <div class="copy__content-contact">
          <a href="" class="copy__btn">
            <svg
              width="24.000000"
              height="24.000000"
              viewBox="0 0 24 24"
              fill="none"
            >
              <desc>Created with Pixso.</desc>
              <defs>
                <clipPath id="clip38_5351">
                  <rect
                    id="bussiness / bar-chart-horizontal-line"
                    width="24.000000"
                    height="24.000000"
                    transform=" rotate(-0.000000)"
                    fill="white"
                    fill-opacity="0"
                  />
                </clipPath>
              </defs>
              <g clip-path="url(#clip38_5351)">
                <path
                  id="Vector"
                  d="M12 3L12 5L3 5L3 3L12 3ZM16 19L16 21L3 21L3 19L16 19ZM22 11L22 13L3 13L3 11L22 11Z"
                  fill="var(--text-color)"
                  fill-opacity="1.000000"
                  fill-rule="nonzero"
                />
              </g>
            </svg>
            Наши реквизиты
          </a>
          <a href="" class="copy__phone-btn">
            <img src="./img/svg/phone.svg" class="copy__phone" alt="" />
            +7 (923) 370-78-25
          </a>
          <a href="" class="copy__email-btn">
            <img src="./img/svg/email.svg" class="copy__email" alt="" />
            info@copyl.ru
          </a>
        </div>
        <div class="copy__content-info">
          <p class="content__info-copyright">© 2007–2020 Компания «АТОМ»</p>
          <a href="" class="content__info-agree">
            Пользовательское соглашение
          </a>
          <a href="" class="content__info-politics">
            Политика обработки данных
          </a>
        </div>
      </div>
      <div class="copy__content-btns">
        <a href="" class="content__btns-project">
          Оформить проект
        </a>
        <a href="" class="content__btns-order">
          Заказать звонок
        </a>
      </div>
    </div>
  );
}

export default Copy;
