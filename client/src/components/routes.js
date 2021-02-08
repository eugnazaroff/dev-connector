import React from 'react'
import { Route, Switch } from 'react-router-dom'
import EventCard from './EventCard/EventCard'
import SignUp from '../pages/sign-up/sign-up'

const Routes = () => {
    const isAuth = true

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
                    <Route exact path="/">
                        <SignUp />
                    </Route>
                    <Route path="/register">
                        <SignUp />
                    </Route>
                </Switch>
            )}
        </div>
    )
}

export default Routes
