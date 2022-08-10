import React from 'react'
import Navbar from '../../components/NavBar/Navbar'
import "../../components/NavBar/Navbar"
import Footer from '../../components/Footer/Footer'

function Layout({children}) {
    return (
        <>
            <Navbar />
            <div>
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default Layout