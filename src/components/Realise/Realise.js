import React from "react";
import content from "../../content.json";
function Realise() {
  return (
    <div className="decor-line">
      <section class="realise">
        <div class="container realise__container">
          <div class="realise__title">
            <h1 class="realise__title-text">
              Выполненые
              <span class="span__green">проекты</span>
            </h1>
            <h2 class="realise__title-info">
              Реализовали более 200 <br />
              проектов за последние два года
            </h2>
          </div>
          <div class="realise__content">
            {content.cards.map((item) => (
              <div class="realise__card">
                <div class="decor__mac">
                  <span class="red"></span>
                  <span class="yellow"></span>
                  <span class="green"></span>
                </div>
                <img src={item.image} alt="" class="realise__card-img" />
                <div class="realise__card-info">
                  <h4 class="card__info-title">{item.title}</h4>
                  <h3 class="card__info-text">{item.info}</h3>
                  <div class="card__hover">
                    <p class="card__info-desc">{item.desc}</p>
                    <div class="realise__card-btn">
                      <a href="" class="card__info-btn">
                        Подробнее
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a href="" class="realise__work-btn">
            Посмотреть все работы
          </a>
        </div>
      </section>
    </div>
  );
}

export default Realise;
