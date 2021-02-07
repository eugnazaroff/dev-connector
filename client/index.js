import React from 'react'
import { render } from 'react-dom'
import App from './src/App'
import './index.scss'

import { BrowserRouter } from 'react-router-dom'
render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
)
