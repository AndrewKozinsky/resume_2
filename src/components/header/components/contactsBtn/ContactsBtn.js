import React from 'react'
import bd from "../../../../utils/bd/bd"
import s from './css/ContactsBtn.module.scss'


function ContactsBtn() {

    // Получу массив способов связи со мной
    const contactsArr = bd.getContactsList()

    // Создам массив с разметкой ссылок
    const linksMarkup = contactsArr.map((cellData, i) => {
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