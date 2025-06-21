import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaBook, FaFileAlt } from "react-icons/fa";
import './Header.css';

const Header = () => {
  return (
    <>
      <header>
        <section className="header-section">
          <div className="header-target">
            <h1 className="principalName">
              Emanuel<span>Rojas</span>
            </h1>
          </div>

          <div className="header-target">
            <nav>
              <ul className="unordered-list">
                <li>
                  <Link to="/" className="header-li">
                    <FaHome /> Inicio
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="header-li">
                    <FaUser /> Proyectos
                  </Link>
                </li>
                <li>
                  <Link to="/diplomas" className="header-li">
                    <FaBook /> Diplomas
                  </Link>
                </li>
                <li>
                  <Link to="/cv" className="header-li">
                    <FaFileAlt /> Hoja de vida
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="header-target">
            <button>🌓</button>
            <button>🌐</button>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
