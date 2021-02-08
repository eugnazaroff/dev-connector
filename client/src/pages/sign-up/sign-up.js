import React from 'react'
import './sign-up.scss'
const SignUp = () => {
    return (
        <div className="signup-form">
            <form className="signup-form__container">
                <h3 className="signup-form__heading">Регистрация</h3>
                <input
                    name="email"
                    type="text"
                    className="signup-form__input"
                    placeholder="Введите ваш e-mail"
                />
                <input
                    name="name"
                    type="text"
                    className="signup-form__input"
                    placeholder="Введите ваше имя"
                />
                <input
                    name="password"
                    type="password"
                    className="signup-form__input"
                    placeholder="Ввердите пароль"
                />
                <input
                    name="passwordConfirm"
                    type="password"
                    className="signup-form__input"
                    placeholder="Введите потдвержение пароля"
                />
                <input
                    type="submit"
                    className="signup-form__submit"
                    value="Зарегистрироваться"
                />
            </form>
        </div>
    )
}

export default SignUp
