import React, { useState, useEffect } from "react";

const AnimatedText = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Для отслеживания активного элемента
  const words = ["Узнайте", "за 3 минуты", "стоимость", "вашего проекта"]; // Слова для анимации
  const interval = 2000; // Интервал в миллисекундах между переключениями

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % words.length); // Циклический переход
    }, interval);

    return () => clearInterval(timer); // Очистка таймера при размонтировании компонента
  }, [words.length]);

  return (
    <div className="text-animation">
      {words.map((word, index) => (
        <span
          key={index}
          className={`word ${index === activeIndex ? "active" : ""}`}
        >
          {word}
        </span>
      ))}
    </div>
  );
};

export default AnimatedText;
