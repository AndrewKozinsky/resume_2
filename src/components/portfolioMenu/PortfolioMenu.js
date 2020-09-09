import React from 'react'
import MobileMenu from "./components/mobileMenu"
import Menu from "./components/menu"


function PortfolioMenu({pageType}) {
    return (
        <>
            <MobileMenu pageType={pageType} />
            <Menu pageType={pageType} />
        </>
    )
}



export default PortfolioMenu