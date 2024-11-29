import React from "react";

function Header_blog() {
  return (
    <div>
      <header className="headerBlog">
        <div className="container headerBlog__container">
          <div className="headerBlog__content">
            <button className="header__btn">
              <svg
                width="16.000000"
                height="15.556030"
                viewBox="0 0 16 15.556"
                fill="none"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                  id="Vector"
                  d="M3.82 6.77L16 6.77L16 8.77L3.82 8.77L9.19 14.14L7.77 15.55L0 7.77L7.77 0L9.19 1.41L3.82 6.77Z"
                  fill="var(--text-color)"
                  fill-opacity="1.000000"
                  fill-rule="nonzero"
                />
              </svg>
              Назад
            </button>
            <h1 className="header__title-blog">Наш блог</h1>
            <div className="header__category">
              <button className="header__category-btn">Все категории</button>
              <button className="header__category-btn">Верстка сайтов</button>
              <button className="header__category-btn">Разработка</button>
              <button className="header__category-btn">Новости компании</button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header_blog;
