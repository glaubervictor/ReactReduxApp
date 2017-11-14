import React from 'react'
import './js/dependencies'

import Header from './header'
import SideBar from './sideBar'
import Footer from './footer'

import Routes from '../routes/routes'

export default props => (
    <div className="wrapper">
        <Header/>
        <SideBar/>
        <div className="content-wrapper">
            <Routes/>
        </div>
        <Footer/>
    </div>
)