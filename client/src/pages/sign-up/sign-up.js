import React from 'react'
import './sign-up.scss'
<<<<<<< HEAD
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
=======
const SignUp = () => {
    return (
>>>>>>> origin/client
        <div className="signup-form">
            <form className="signup-form__container">
                <h3 className="signup-form__heading">Регистрация</h3>
                <input
<<<<<<< HEAD
                    onChange={onChange}
=======
>>>>>>> origin/client
                    name="email"
                    type="text"
                    className="signup-form__input"
                    placeholder="Введите ваш e-mail"
                />
                <input
<<<<<<< HEAD
                    onChange={onChange}
=======
>>>>>>> origin/client
                    name="name"
                    type="text"
                    className="signup-form__input"
                    placeholder="Введите ваше имя"
                />
                <input
<<<<<<< HEAD
                    onChange={onChange}
=======
>>>>>>> origin/client
                    name="password"
                    type="password"
                    className="signup-form__input"
                    placeholder="Ввердите пароль"
                />
                <input
<<<<<<< HEAD
                    onChange={onChange}
=======
>>>>>>> origin/client
                    name="passwordConfirm"
                    type="password"
                    className="signup-form__input"
                    placeholder="Введите потдвержение пароля"
                />
                <input
<<<<<<< HEAD
                    onClick={onSubmit}
=======
>>>>>>> origin/client
                    type="submit"
                    className="signup-form__submit"
                    value="Зарегистрироваться"
                />
            </form>
        </div>
<<<<<<< HEAD
    ) : (
        <h3 className="signup-form__heading">
            Регистрация прошла успешна, теперь вы можете (
            <Link to="/login">войти</Link>) в свой аккаунт
        </h3>
=======
>>>>>>> origin/client
    )
}

export default SignUp
