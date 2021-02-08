import React from 'react'
import { Route, Switch } from 'react-router-dom'
import EventCard from './EventCard/EventCard'
import SignUp from '../pages/sign-up/sign-up'
<<<<<<< HEAD
import { useSelector } from 'react-redux'

const Routes = () => {
    const isAuth = useSelector((state) => state.users.isAuth)
=======

const Routes = () => {
    const isAuth = true
>>>>>>> origin/client

    return (
        <div>
            {isAuth && (
                <Switch>
                    <Route exact path="/" />
                    <Route path="/events" />
                </Switch>
            )}
            {!isAuth && (
                <Switch>
<<<<<<< HEAD
                    <Route exact path="/"></Route>
=======
                    <Route exact path="/">
                        <SignUp />
                    </Route>
>>>>>>> origin/client
                    <Route path="/register">
                        <SignUp />
                    </Route>
                </Switch>
            )}
        </div>
    )
}

export default Routes
