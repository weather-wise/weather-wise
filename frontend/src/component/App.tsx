import React from 'react'
import Helmet from 'react-helmet'
import { APP_NAME } from '../constants'
import './App.css'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'

function App() {
    return (
        <div className="App">
            <Helmet>
                <title>{APP_NAME}</title>
            </Helmet>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default App
