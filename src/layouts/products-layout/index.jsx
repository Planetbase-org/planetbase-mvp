import React from 'react'
import MenuNav from '../../components/NavBar/MenuNav'

function Layout({children}) {
    return (
        <div className="layout-container">
            <MenuNav />
            {children}
        </div>
    )
}

export default Layout