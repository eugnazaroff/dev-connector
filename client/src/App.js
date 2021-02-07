import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './app.scss'
import { Switch } from 'react-router-dom'
const App = () => {
    return (
        <div className="app">
            <Navbar />
            <div className="container"></div>
        </div>
    )
}

export default App
