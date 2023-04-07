import React from 'react';

function Modules() {
  return (
    <div className="about">
      <header>
        <h1>About Us</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
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

export default Modules;
