import './Header.css'

const Header = () => {
    return (
        <>
        <header>
            <section className="header-section">
                <div className='header-target'>
                    <h1 className='principalName'>EmanueRojas</h1>
                </div>
                <div className='header-target'>
                    <nav>
                        <ul>
                            <li>Inicio</li>
                            <li>Proyectos</li>
                            <li>Diplomas</li>
                            <li>Hoja de vida</li>
                        </ul>
                    </nav>
                </div>
                <div className='header-target'>
                    <button>🌓</button>
                    <button>🌐</button>
                </div>
            </section>
        </header>
        </>
    )
}
export default Header;