import React, {useState} from 'react'
import {Link} from "react-router-dom"
import {useQuery} from "../../../../utils/workWithUrl"
import bd from "../../../../utils/bd/bd"
import s from './css/MobileMenu.module.scss'



function MobileMenu({pageType}) {

    // Открыто ли меню
    const [isMenuOpen, setMenuOpen] = useState(false)

    // Кнопка открывающая/закрывающая меню
    let menuBtnCls = s.btn + ' ' + s['btn--menu']
    if(isMenuOpen) menuBtnCls += ' ' + s['btn--menu-open']

    // Кнопки перемещения по работам
    const prevWorkBtnCls = s.btn + ' ' + s['btn--prev']
    const nextWorkBtnCls = s.btn + ' ' + s['btn--next']

    function onMenuBtnClick() {
        setMenuOpen( !isMenuOpen )
    }


    return (
        <div className={s['outer-wrapper']}>
            <div className={s['top-side']}>
                <button className={menuBtnCls} onClick={onMenuBtnClick}>Меню</button>
                <button className={prevWorkBtnCls} />
                <button className={nextWorkBtnCls} />
            </div>
            <div className={s['bottom-side']}>
                <Blocks pageType={pageType} isMenuOpen={isMenuOpen} />
            </div>
        </div>
    )
}



function Blocks({pageType, isMenuOpen}) {

    // Объект запроса в URL
    let query = useQuery()

    // Конфигурация меню
    const config = bd.getMenuConfig(pageType)

    // Получу название текущего пункта меню
    let currentWork = query.get("work") || config[0].items[0].query

    // Получу URL страницы
    let pageUrl
    if(pageType === 'developer') pageUrl = '/'
    if(pageType === 'designer') pageUrl = '/design'


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

    const visibility = isMenuOpen ? 'grid' : ''

    return (
        <div className={s.menu} style={{display: visibility}}>
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

export default MobileMenu