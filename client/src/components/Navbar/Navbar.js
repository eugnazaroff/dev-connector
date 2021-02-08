import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__container">
                <h1 className="navbar__logo">Evently</h1>
                <nav className="navbar__menu">
                    <Link className="navbar__link" to="#">
                        Ваш город
                    </Link>
                    <Link className="navbar__link" to="#">
                        Добавить
                    </Link>
                    <Link className="navbar__link" to="#">
                        Личный кабинет
                    </Link>
                    <Link className="navbar__link" to="#">
                        Выход
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
