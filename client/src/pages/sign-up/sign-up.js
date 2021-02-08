import React from 'react'
import './sign-up.scss'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../redux/users/users.actions'
import { Link } from 'react-router-dom'
const SignUp = () => {
    const dispatch = useDispatch()

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
    })

    const completed = useSelector(state => state.users.registerCompleted)

    const onChange = event => {
        const { value, name } = event.target
        setData({
            ...data,
            [name]: value,
        })
    }

    function onSubmit(event) {
        event.preventDefault()
        dispatch(registerUser(data.email, data.name, data.password))
    }

    return !completed ? (
        <div className="signup-form">
            <form className="signup-form__container">
                <h3 className="signup-form__heading">Регистрация</h3>
                <input
                    onChange={onChange}
                    name="email"
                    type="text"
                    className="signup-form__input"
                    placeholder="Введите ваш e-mail"
                />
                <input
                    onChange={onChange}
                    name="name"
                    type="text"
                    className="signup-form__input"
                    placeholder="Введите ваше имя"
                />
                <input
                    onChange={onChange}
                    name="password"
                    type="password"
                    className="signup-form__input"
                    placeholder="Ввердите пароль"
                />
                <input
                    onChange={onChange}
                    name="passwordConfirm"
                    type="password"
                    className="signup-form__input"
                    placeholder="Введите потдвержение пароля"
                />
                <input
                    onClick={onSubmit}
                    type="submit"
                    className="signup-form__submit"
                    value="Зарегистрироваться"
                />
            </form>
        </div>
    ) : (
        <h3 className="signup-form__heading">
            Регистрация прошла успешна, теперь вы можете (
            <Link to="/login">войти</Link>) в свой аккаунт
        </h3>
    )
}

export default SignUp
