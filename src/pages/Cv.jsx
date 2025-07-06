import Header from "../components/Header";

const Cv = () => {
    return (
        <>
            <Header />
            <main>
                <div className="project-section">
                    <div className="project-target">
                        <div className="project-description">
                            <h1>Descargar mi CV</h1>
                            <p>Haz clic en el botón de abajo para descargar mi currículum vitae en español.</p>
                            <a href="/cv/cv-e.pdf" download>
                                <button>Descargar CV</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="project-section">
                    <div className="project-target">
                        <div className="project-description">
                            <h1>Download my resume</h1>
                            <p>Click the button below to download my resume in english.</p>
                            <a href="/cv/cv-i.pdf" download>
                                <button>Download resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
export default Cv;