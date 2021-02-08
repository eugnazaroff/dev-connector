import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './app.scss'
import { Switch, Route } from 'react-router-dom'
import EventCard from './components/EventCard/EventCard'
import SignUp from './pages/sign-up/sign-up'
import Routes from './components/routes'
<<<<<<< HEAD
import { useSelector } from 'react-redux'
=======
>>>>>>> origin/client
const App = () => {
    const eventTest = {
        title: 'Test Event',
        image:
            'https://previews.123rf.com/images/victoroancea/victoroancea1201/victoroancea120100059/12055848-tv-color-test-pattern-test-card-for-pal-and-ntsc.jpg',
        description: 'This is test event that is located at Test Location',
    }
<<<<<<< HEAD

=======
>>>>>>> origin/client
    return (
        <div className="app">
            <Navbar />

            <div className="container">
                <Routes />
            </div>
        </div>
    )
}

export default App
