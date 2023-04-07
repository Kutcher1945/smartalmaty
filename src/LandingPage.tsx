import logo from './logo.png';
import './index.css';
import analytics from './analytics.png';
import statistics_city from './statistics_city.png'
import statistics_search from './statistics_search.png'
import dashboard from './dashboard.png'
import report from './report.png'
import reports from './reports.png'
import React, { MouseEvent, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// ...

const handleSituationCenterClick = () => {
    // handle navigation to situation center page
  };
  
  const handleDistrictMonitoringClick = () => {
    // handle navigation to district monitoring page
  };
  
  const handleCityEconomyClick = () => {
    // handle navigation to city economy page
  };
  
  const handleSocialLifeClick = () => {
    // handle navigation to social life page
  };
  
  const handleStartupEcosystemClick = () => {
    // handle navigation to startup ecosystem page
  };
  
  const handleEcologyClick = () => {
    // handle navigation to ecology page
  };
  


function LandingPage() {
  const handleServicesClick = () => {
    // handle navigation to services page
  };

  const handleAboutClick = () => {
    // handle navigation to about page
  };

  const handleContactsClick = () => {
    // handle navigation to contacts page
  };

  const handleLearnMoreClick = () => {
    // handle navigation to learn more page
  };
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate a delay for the page to load
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  if (isLoading) {
    return (
      <div className="loader-container">
        <img src={logo} className="loader-image" alt="My Company Logo" />
      </div>
    );
  }
  

  return (
<div className="landing-page">
      <header className="logo_header">
        <img className="logo" src={logo} alt="My Company Logo" />
      </header>
      <header className="navigation_header">
      <nav className="text-center">
          <ul>
            <li>
              <Link to="/" className="d-inline-block">
                Модули
              </Link>
            </li>
            <li>
              <Link to="/blog" className="d-inline-block">
                Блог
              </Link>
            </li>
            <li>
              <Link to="/about" className="d-inline-block">
                О нас
              </Link>
            </li>
            <li>
              <Link to="/contacts" className="d-inline-block">
                Контакты
              </Link>
            </li>
            <div className="search-bar-container">
                <div className="search-bar">
                    <input type="text" placeholder="Поиск...." />
                    <button type="submit">ПОИСК</button>
                </div>
            </div>
          </ul>
        </nav>

        </header>
      <p></p>
      
<p></p>
      <div className="centered-text-container">
        <h2>Ситуационный центр Алматы</h2>
        <p>Основной целью Ситуационного Центра города Алматы является содействие социально-экономическому развитию города Алматы с учетом лучших мировых практик.</p>
        <p>Деятельность Общества осуществляется по следующим направлениям:</p>
            <ul>
                <li>Мониторинг и анализ показателей жизнедеятельности города</li>
                <li>Развитие системы взаимодействия местных исполнительных органов с населением города</li>
                <li>Экономическая экспертиза инвестиционных проектов и бизнес-планов государственно-частного партнерства.</li>
            </ul>
      </div>
      <p></p>
<div className="button-grid">
  <button className="button" onClick={handleSituationCenterClick}>
    <img src={analytics} alt="Ситуационный центр" />
    <a href="https://demo.opendata.smartalmaty.kz/for-test-modules/">
    <h3>Ситуационный центр</h3>
    </a>
  </button>
  <button className="button" onClick={handleDistrictMonitoringClick}>
    <img src={statistics_city} alt="Мониторинг районов" />
    <a href="https://demo.opendata.smartalmaty.kz/for-test-modules/">
    <h3>Мониторинг районов</h3>
    </a>
  </button>
  <button className="button" onClick={handleCityEconomyClick}>
    <img src={statistics_search} alt="Экономика города" />
    <a href="https://demo.opendata.smartalmaty.kz/for-test-modules/">
    <h3>Экономика города</h3>
    </a>
  </button>
  {/* Add more buttons as needed */}
</div>
<div className="button-grid">
  <button className="button" onClick={handleSocialLifeClick}>
    <img src={dashboard} alt="Социальная жизнь" />
    <a href="https://demo.opendata.smartalmaty.kz/for-test-modules/">
    <h3>Социальная жизнь</h3>
    </a>
  </button>
  <button className="button" onClick={handleStartupEcosystemClick}>
    <img src={report} alt="Стратап экосистема" />
    <a href="https://demo.opendata.smartalmaty.kz/for-test-modules/">
    <h3>Стратап экосистема</h3>
    </a>
  </button>
  <button className="button" onClick={handleEcologyClick}>
    <img src={reports} alt="Экология" />
    <a href="https://demo.opendata.smartalmaty.kz/for-test-modules/">
    <h3>Экология</h3>
    </a>
  </button>
  {/* Add more buttons as needed */}
</div>
      <footer>
        <p>&copy; 2023 Ситуационный центр Алматы. Все права защищены</p>
      </footer>
    </div>
  );
}

export default LandingPage;
