import Header from "../components/Header";
import { FrontProjects, BackProjects } from "../services/database";
import { useTranslation } from "react-i18next";
import "./Project.css";
import { useState } from "react";

const Project = () => {
  const [option, setOption] = useState("all");
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <>
      <Header />
      <main>
        <div className="project-header">
          <h2 className="title">{t("projects.title")}</h2>
            <select className="option" name="projects" onChange={(e) => setOption(e.target.value)}>
              <option value="all" className="selector">{t("projects.myProject")}</option>
              <option value="FrontProjects" className="selector">Frontend</option>
              <option value="BackProjects" className="selector">Backend</option>
            </select>
        </div>
        {(option === "all" || option === "FrontProjects") && (
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
                <h1>{item.titulo[lang]}</h1><br />
                <h3>{item.subtitulo[lang]}</h3>
                <p>{item.descripcion[lang]}</p>
                <div onClick={() => window.open(item.githubLink, "_blank", "noopener,noreferrer")} style={{ cursor: "pointer" }}>
                  <button>{t("projects.button")}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        )}
        {(option === "all" || option === "BackProjects") && (
        <div className="project-section">
          {BackProjects.map((item, index) => (
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
                <h1>{item.titulo[lang]}</h1><br />
                <h3>{item.subtitulo[lang]}</h3>
                <p>{item.descripcion[lang]}</p>
                <div onClick={() => window.open(item.githubLink, "_blank", "noopener,noreferrer")} style={{ cursor: "pointer" }}>
                  <button>{t("projects.button")}</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        )}
      </main>
    </>
  );
};

export default Project;
