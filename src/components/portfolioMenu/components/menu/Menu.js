import React from 'react'
import {Link} from "react-router-dom"
import {useQuery} from "../../../../utils/workWithUrl"
import bd from "../../../../utils/bd/bd"

import s from './css/Menu.module.scss'


function Menu({pageType}) {

    // Объект запроса в URL
    let query = useQuery()

    // Конфигурация меню
    const config = bd.getMenuConfig(pageType)

    // Получу название текущего пункта меню
    let currentWork = query.get("work") || config[0].items[0].query

    // Получу URL страницы
    let pageUrl
    if(pageType === 'develop') pageUrl = '/'
    if(pageType === 'design') pageUrl = '/design'


    const items = config.map( (blockObj, i) => {
        const header = blockObj.name
                ? <h4 className={s['menu__block-header']}>{blockObj.name}</h4>
                : null

        return (
            <div className={s['menu__block']} key={i}>
                {header}
                <ul>
                    <Items itemsArr={blockObj.items} currentWork={currentWork} pageUrl={pageUrl} />
                </ul>
            </div>
        )
    })

    return (
        <div className={s['outer-wrapper']}>
            {items}
        </div>
    )
}

function Items({itemsArr, currentWork, pageUrl}) {
    return itemsArr.map(itemObj => {
        const href = pageUrl + '?work=' + itemObj.query

        let linkCls = s['menu__link']
        if(currentWork === itemObj.query) linkCls += ' ' + s['menu__link--current']

        return (
            <li key={itemObj.query}>
                <Link className={linkCls} to={href}>
                    {itemObj.title}
                </Link>
            </li>
        )
    })
}

export default Menu