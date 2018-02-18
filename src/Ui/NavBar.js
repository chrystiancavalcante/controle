import React from 'react'

const NavBar = (props) => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="">{props.logo}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="">Painel <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Vendas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="">Estoque</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Entrar
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="">Administrativo</a>
                            <a className="dropdown-item" href="">Gerencial</a>
                            <a className="dropdown-item" href="">Atendimento</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>

    )

}

export default NavBar