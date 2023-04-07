import React from 'react';

function Blog() {
  return (
    <div className="about">
      <header>
        <h1>БЛОГ</h1>
        <nav>
          <ul>
            <li><a href="/">Модули</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contacts">Contacts</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <h2>Welcome to our About page</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </main>
      <footer>
        <p>&copy; 2023 My Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Blog;
