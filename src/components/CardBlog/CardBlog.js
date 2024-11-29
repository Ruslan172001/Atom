import React from "react";
import content from "../../content.json";

function CardBlog() {
  return (
    <div>
      <div className="decor-line">
        <section className="cards__blog">
          <div className="container cards__blog-container">
            <div className="cards__blog-content">
              {content.cards.map((item) => (
                <div className="cards__blog-item">
                  <img className="cards__blog-img" src={item.image} alt="" />
                  <h5 className="cards__blog-title">{item.title}</h5>
                  <p className="cards__blog-name">{item.info}</p>
                  <p className="cards__blog-text">{item.desc}</p>
                </div>
              ))}
            </div>
            <button className="cards__blog-btn">
              Показать еще
              <svg
                width="20.000000"
                height="20.000000"
                viewBox="0 0 20 20"
                fill="none"
              >
                <desc>Created with Pixso.</desc>
                <defs />
                <path
                  id="Vector"
                  d="M3.46 2.43C5.27 0.86 7.59 -0.01 10 0C15.52 0 20 4.47 20 10C20 12.13 19.33 14.11 18.19 15.74L15 10L18 10C18 8.43 17.53 6.89 16.67 5.58C15.81 4.28 14.57 3.25 13.13 2.64C11.69 2.02 10.1 1.84 8.55 2.13C7.01 2.41 5.59 3.14 4.46 4.22L3.46 2.43ZM16.53 17.56C14.72 19.13 12.4 20 10 20C4.47 20 0 15.52 0 10C0 7.86 0.66 5.88 1.81 4.26L5 10L2 10C1.99 11.56 2.46 13.1 3.32 14.41C4.18 15.71 5.42 16.74 6.86 17.35C8.3 17.97 9.89 18.15 11.44 17.87C12.98 17.58 14.4 16.85 15.54 15.77L16.53 17.56Z"
                  fill="var(--text-color)"
                  fill-opacity="1.000000"
                  fill-rule="nonzero"
                />
              </svg>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CardBlog;
