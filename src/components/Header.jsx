import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { useState, useEffect } from 'react';
import { FaHome, FaUser, FaBook, FaBars, FaTimes } from "react-icons/fa";
import './Header.css';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark";
  });

  const toggleLang = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    document.body.className = darkMode ? 'dark-theme' : 'light-theme';
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <>
      <header>
        <section className="header-section">
          <div className="header-target">
            <h1 className="principal-name">
              <span className="name-container">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="logo-icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
                </svg>
                <span>
                  Emanuel<span className='blue-name'>Rojas</span>
                </span>
              </span>
            </h1>
          </div>

          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <div className="header-nav-desktop">
            <nav>
              <ul className="unordered-list">
                <li>
                  <Link to="/" className="header-li">
                    <FaHome /> {t("header.home")}
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="header-li">
                    <FaUser /> {t("header.projects")}
                  </Link>
                </li>
                <li>
                  <Link to="/diplomas" className="header-li">
                    <FaBook /> {t("header.diplomas")}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="header-buttons-desktop">
            <button onClick={() => setDarkMode(!darkMode)} className="toggle-theme-btn">
              <img
                src={darkMode ? "/icons/light.svg" : "/icons/dark.svg"}
                alt="icono theme"
                className="icon"
              />
              {darkMode ? '' : ''}
            </button>
            <button onClick={toggleLang}>
              <img src="/icons/translate.svg" alt="" className="icon-space" /> {t("header.language")}
            </button>
          </div>
        </section>

        {menuOpen && (
          <div className="header-mobile-menu">
            <nav>
              <ul className="unordered-list">
                <li><Link to="/" onClick={() => setMenuOpen(false)} className="header-li"><FaHome /> {t("header.home")}</Link></li>
                <li><Link to="/projects" onClick={() => setMenuOpen(false)} className="header-li"><FaUser /> {t("header.projects")}</Link></li>
                <li><Link to="/diplomas" onClick={() => setMenuOpen(false)} className="header-li"><FaBook /> {t("header.diplomas")}</Link></li>
              </ul>
            </nav>
            <div className="header-buttons-mobile">
              <button onClick={() => setDarkMode(!darkMode)} className="toggle-theme-btn">
                <img
                  src={darkMode ? "/icons/light.svg" : "/icons/dark.svg"}
                  alt="icono theme"
                  className="icon"
                />
                {darkMode ? '' : ''}
              </button>
              <button onClick={toggleLang}>
                <img src="/icons/translate.svg" alt="" className="icon-space" /> {t("header.language")}
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
