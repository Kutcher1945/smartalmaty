import React from 'react';

function About() {
  return (
    <div className="about">
      <header>
        <h1>О Ситуационном центре</h1>
        <nav>
          <ul>
            <li><a href="/">Модули</a></li>
            <li><a href="/blog">Блог</a></li>
            <li><a href="/about">О нас</a></li>
            <li><a href="/">Контакты</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>Добро пожаловать на страницу ознакомления с ситуационным центром Алматы</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </main>
      <footer>
        <p>&copy; 2023 Ситуационный центр Алматы. Все права защищены.</p>
      </footer>
    </div>
  );
}

export default About;
