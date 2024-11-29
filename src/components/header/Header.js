import arrow from "../../img/svg/arrow-btn.svg";
function Header() {
  return (
    <div className="decor-line">
      <header className="header">
        <div className="container">
          <div className="header__content">
            <div className="header__text">
              <h1 className="header__title">Аутсорсинг</h1>
              <p className="header__subtitle">веб-разработки</p>
              <p className="header__info">Для Digital-агенства и бизнеса</p>
            </div>
            <div className="header__btn-content">
              <img className="btn__arrow" src={arrow} alt="" />
              <a href="" className="btn__price">
                Узнать стоимость проекта
              </a>
              <p className="btn__content-info">
                Ответьте на 3 вопроса и получите примерную <br />
                стоимость вашего проекта
              </p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
