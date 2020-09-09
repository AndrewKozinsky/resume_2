// import React from 'react'
// import s from '../css/PortfolioMenu.module.scss'
// import {Link} from "react-router-dom"

const menuConfig = [
    /*{
        name: null,
        items: [
            {
                title: 'Инструменты',
                query: 'tools'
            }
        ]
    },
    {
        name: null,
        items: [
            {
                title: 'Опыт работы',
                query: 'experience'
            }
        ]
    },
    {
        name: 'Вёрстка',
        items: [
            {
                title: 'Kflex.ru',
                query: 'kflex'
            },
            {
                title: 'Фрико.рус',
                query: 'friko'
            },
            {
                title: 'Volсano.ru',
                query: 'volcano'
            }
        ]
    }*/
]

/*export function createBlocks(config, currentWork, pageUrl) {
    return config.map( (blockObj, i) => {

        const header =
            blockObj.name
                ? <h4 className={s['menu__block-header']}>{blockObj.name}</h4>
                : null

        return (
            <div key={i}>
                {header}
                {createItems(blockObj.items, currentWork, pageUrl)}
            </div>
        )
    })
}*/

/*
function createItems(itemsArr, currentWork, pageUrl) {

    const itemsMarkup = itemsArr.map(itemObj => {
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

    return (
        <ul className={s['menu__block']}>
            {itemsMarkup}
        </ul>
    )
}*/
