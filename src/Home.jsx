import Header from "./components/Header"
import { useTranslation } from "react-i18next";
import { iconosKnowledge } from "./services/database";
import { Link } from "react-router-dom";

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <main>
        <div className="principal-container">
          <div className="profile-container">
            <img src="/profile.jpg" alt="" className="profile-image" />
            <div className="profile-text">
              <h2>Emanuel Rojas 👋</h2>
              <p>
                {t("home.aboutMe")}<br /> <br /> {t("home.description")}
              </p>
            </div>
          </div>
          <Link to={"/cv"} className="resume-button">{t("home.cv")}</Link>
        </div>
        <div className="principal-container">
          <div className="medium-container">
            <h2>{t("home.knowledge")}</h2>
            <div className="icon-grid">
              {iconosKnowledge.map((item, index) => (
                <div className="icon-item" key={index}>
                  <img src={item.img} alt={item.nombre} />
                  <p>{item.nombre}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="medium-container">
            <h2>{t("home.networks")}</h2>
            <div className="icon-grid">
              <a className="icon-item" href="https://www.linkedin.com/in/emanuel-rojas-ramirez-0b187835a/" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
                <p>LinkedIn</p>
              </a>
              <a className="icon-item" href="https://mail.google.com/mail/?view=cm&fs=1&to=emanuel.rr1522@gmail.com&su=Contacto%20desde%20tu%20portafolio&body=Hola%20Emanuel,%20vi%20tu%20web%20y%20me%20interes%C3%B3%20tu%20perfil." target="_blank" rel="noopener noreferrer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Gmail" />
                <p>Gmail</p>
              </a>
              <a className="icon-item" href="https://github.com/Emanuel1522" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                <p>GitHub</p>
              </a>
            </div>
          </div>
        </div>
        <div className="principal-container">
          <div className="description-container">
            <h2>{t("home.aboutPageTitle")}</h2>
            <p>
              {t("home.aboutPage")}
            </p>
            <p>
              {t("home.aboutPageB")}
            </p>
          </div>
          <div className="manual-container">
            <h2>{t("home.manual")}</h2>
            <ul>
              <li><strong>{t("home.first")}</strong> {t("home.firstText")}</li>
              <li><strong>{t("home.second")}</strong> {t("home.secondText")}</li>
              <li><strong>{t("home.third")}</strong> {t("home.thirdText")}</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
