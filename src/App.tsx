import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import AboutPage from './AboutPage';
import BlogPage from './BlogPage';
import ContactPage from './ContactPage';
import ModulesPage from './ModulesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contacts" element={<ContactPage />} />
        <Route path="/modules" element={<ModulesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
