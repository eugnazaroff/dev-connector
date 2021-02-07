import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__container">
                <h1 className="navbar__logo">Evently</h1>
                <nav className="navbar__menu">
                    <Link to="#">Ваш город</Link>
                    <Link>Добавить</Link>
                    <Link>Личный кабинет</Link>
                    <Link>Выход</Link>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
