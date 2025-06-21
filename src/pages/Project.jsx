import Header from "../components/Header";
import { FrontProjects } from "../services/database";
import "./Project.css";

const Project = () => {
  return (
    <>
      <Header />
      <main>
        <h2 className="titulo-proyecto">Mis Proyectos</h2>
        <div className="project-section">
          {FrontProjects.map((item, index) => (
            <div className="proyecto-bloque" key={index}>
              <div className="proyecto-img">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <img src={item.img} alt={`Proyecto ${index}`} />
                </a>
              </div>
              <div className="proyecto-texto">
                <h1>{item.titulo}</h1>
                <p>{item.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Project;
