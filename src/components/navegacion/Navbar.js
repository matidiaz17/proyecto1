import React from "react"

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Blessed</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <ul className="navbar-nav">
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Marcas</a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">Hombre</a>
        </li>
        <li className="nav-item">
        <a className="nav-link">Mujer</a>
        </li>
        </ul>
    </div>
    </div>
</nav>
        </div>
    )
}
export default Navbar