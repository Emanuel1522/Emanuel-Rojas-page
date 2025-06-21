import Header from "./components/Header"
import iconos from "./services/database";

function Home() {

  return (
    <>
      <Header />
      <main>
        <div className="principal-container">
          <div>
            <img src="/profile.jpg" alt="" />
            <h2>Emanuel Rojas 👋</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, inventore voluptate dolorem in nesciunt dolor possimus
              excepturi accusantium, voluptatem eos aliquam cupiditate sapiente pariatur deserunt mollitia at ipsam. Ipsa, voluptate.</p>
          </div>
          <button>Ver CV</button>
        </div>
        <div className="principal-container">
          <div className="medium-container">
            <h2>Conocimientos</h2>
            <div className="icon-grid">
              {iconos.map((item, index) => (
                <div className="icon-item" key={index}>
                  <img src={item.img} alt={item.nombre} />
                  <p>{item.nombre}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="medium-container">
            <h2>Redes</h2>
            <div className="icon-grid">
              <div className="icon-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
                <p>LinkedIn</p>
              </div>
              <div className="icon-item">
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png" alt="Gmail" />
                <p>Gmail</p>
              </div>
              <div className="icon-item">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                <p>GitHub</p>
              </div>
            </div>
          </div>
        </div>
        <div className="principal-container">
          <div className="descripcion-container">
            <h2>Sobre esta página</h2>
            <p>
              Esta página web es una presentación personal desarrollada con React, donde muestro mis habilidades técnicas, enlaces a mis redes 
              profesionales y un resumen de mi perfil.
            </p>
            <p>
              Fue creada como un proyecto personal para practicar desarrollo frontend, organización modular con componentes, y manejo de datos a 
              través de archivos JavaScript .
            </p>
          </div>

          <div className="manual-container">
            <h2>📘 Manual de uso</h2>
            <ul>
              <li><strong>Inicio:</strong> Vista general con tu nombre, foto y un botón para ver tu CV.</li>
              <li><strong>Conocimientos:</strong> Tecnologías que manejas con sus respectivos íconos.</li>
              <li><strong>Redes:</strong> Enlaces a LinkedIn, Gmail y GitHub.</li>
              <li><strong>Responsivo:</strong> Puedes ver esta página desde celular, tablet o PC sin perder diseño.</li>
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
