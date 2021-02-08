import React from 'react'
import { render } from 'react-dom'
import App from './src/App'
import './index.scss'

import { BrowserRouter } from 'react-router-dom'
<<<<<<< HEAD
import { Provider } from 'react-redux'
import { store } from './src/redux/store'
render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
=======
render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
>>>>>>> origin/client
    document.getElementById('root')
)
