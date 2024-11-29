import React from "react";
import AnimatedText from "./AnimatedText";

function BlogQuiz() {
  return (
    <div>
      <section className="blog__quiz">
        <div className="container blog__quiz-container">
          <div className="blog__quiz-content">
            <h2 className="blog__quiz-title">
              <AnimatedText />
            </h2>

            <div className="quiz__form">
              <h3 className="quiz__form-title">У вас уже есть дизайн сайта?</h3>
              <form className="quiz__form-form">
                <label class="quiz__form-item">
                  Да, в фигме.
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>

                <label class="quiz__form-item">
                  Да, в фотошопе
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>

                <label class="quiz__form-item">
                  Да, но в другой программеe
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>

                <label class="quiz__form-item">
                  Есть прототип, дизайн нужно разработать
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
                <label class="quiz__form-item">
                  Дизайна и прототипа нет, нужна консультация
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogQuiz;
