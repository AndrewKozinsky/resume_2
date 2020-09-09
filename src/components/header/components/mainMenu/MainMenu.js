import React from 'react'
import {Link, useRouteMatch} from "react-router-dom"
import s from "./css/MainMenu.module.scss"


function MainMenu() {

    return (
        <nav className={s.nav}>
            <MenuItem label='Верстальщик' to='/'/>
            <MenuItem label='Оформитель' to='/design'/>
        </nav>
    )
}

function MenuItem({label, to}) {
    let match = useRouteMatch({
        path: to,
        exact: true
    })

    let cls = s['nav__link']
    if(match) cls += ' ' + s['nav__link--active']

    return <Link to={to} className={cls} key={label}>{label}</Link>
}


export default MainMenu