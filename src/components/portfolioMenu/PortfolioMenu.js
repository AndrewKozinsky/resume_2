import React from 'react'
import {createBlocks} from "./js/functions"
import s from './css/PortfolioMenu.module.scss'
import {useLocation} from "react-router-dom"


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function PortfolioMenu({config, pageType}) {

    // Объект запроса в URL
    let query = useQuery()

    let queryStr = query.get("work")
    if(!queryStr) {
        if(pageType === 'developer') queryStr = 'tools'
        if(pageType === 'designer') queryStr = 'kflex'
    }

    let pageUrl
    if(pageType === 'developer') pageUrl = '/'
    if(pageType === 'designer') pageUrl = '/design'


    return (
        <nav className={s.menu}>
            {createBlocks(config, queryStr, pageUrl)}
        </nav>
    )
}

export default PortfolioMenu