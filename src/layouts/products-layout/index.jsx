import React from 'react'
import MenuNav from '../../components/NavBar/MenuNav'

function Layout({children}) {
    return (
        <>
            <MenuNav />
            {children}
        </>
    )
}

export default Layout