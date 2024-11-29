import React, { useState, useEffect } from "react";

function DarkLight() {
  const [theme, setTheme] = useState("light");

  // При загрузке страницы проверяем, есть ли сохраненная тема в localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  // Функция для переключения темы
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Сохраняем выбор пользователя
  };
  return (
    <div>
      <div className="dark__mode">
        <label className="switch">
          <input type="checkbox" onClick={toggleTheme} />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
}

export default DarkLight;
