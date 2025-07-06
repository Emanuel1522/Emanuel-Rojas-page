import Header from "../components/Header";
import { FrontProjects } from "../services/database";
import { useTranslation } from "react-i18next";
import "./Project.css";

const Project = () => {
  const { t, i18n} = useTranslation();
  const lang = i18n.language;

  return (
    <>
      <Header />
      <main>
        <h2 className="title">{t("projects.title")}</h2>
        <div className="project-section">
          {FrontProjects.map((item, index) => (
            <div className="project-target" key={index}>
              <div className="img-project">
                <div
                  className="img-project"
                  onClick={() => window.open(item.link, "_blank", "noopener,noreferrer")}
                  style={{ cursor: "pointer" }}
                >
                    <img src={item.img} alt={`Proyecto ${index}`} />
                </div>
              </div>
              <div className="project-description">
                <h1>{item.titulo[lang]}</h1>
                <p>{item.descripcion[lang]}</p>
                <div onClick={() => window.open(item.githubLink, "_blank", "noopener,noreferrer")} style={{ cursor: "pointer" }}>
                  <button>{t("projects.button")}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Project;
