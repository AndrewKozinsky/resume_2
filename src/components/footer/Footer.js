import React from 'react'
import bd from "../../utils/bd/bd"
import s from './css/Footer.module.scss'


function Footer() {

    // Получу массив способов связи со мной
    const contactsArr = bd.getContactsList()

    // Создам массив с разметкой ссылок
    const cellsMarkup = contactsArr.map(cellData => {

        // Класс ссылки
        const linkCls = s['adr-link'] + ' black-link ' + s['adr-link__' + cellData.prefix]

        // Возвращаю разметку ссылки
        return (
            <div className={s['adr__cell']} key={cellData.prefix}>
                <a href={cellData.href} className={linkCls}>
                    {cellData.text}
                </a>
            </div>
        )
    })

    return (
        <address className={s.adr}>
            {cellsMarkup}
        </address>
    )
}

export default Footer