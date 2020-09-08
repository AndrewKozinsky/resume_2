import React from 'react'
import {useSelector, shallowEqual} from "react-redux"
import s from './css/ContactsBtn.module.scss'

function ContactsBtn() {
    const {addresses} = useSelector(store => store, shallowEqual)

    const linksMarkup = addresses.map((cellData, i) => {
        const spanCls = s['contacts-btn__text'] + ' ' + s['contacts-btn__text__' + cellData.prefix]

        return (
            <a href={cellData.href} className={s['contacts__btn']} key={i} >
                <span className={spanCls}>
                    {cellData.text}
                </span>
            </a>
        )
    })


    return (
        <div className={s.contacts}>
            <button className={s['contacts__front-btn']}>Контакты</button>
            <aside className={s['contacts__list']}>
                {linksMarkup}
            </aside>
        </div>
    )
}

export default ContactsBtn