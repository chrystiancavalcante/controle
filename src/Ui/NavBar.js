import React from 'react'
import {Link} from 'react-router'

const NavBar = (props) => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to='/'className="navbar-brand">{props.logo}</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                    <Link to='/pedidos' className="nav-link">Pedidos</Link>
                    </li>
                    <li className="nav-item">
                    <Link to='/vendas' className="nav-link">Vendas</Link>
                    </li>
                    <li className="nav-item">
                    <Link to='/estoque' className="nav-link">Estoque</Link>
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