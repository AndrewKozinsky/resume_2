import React from 'react'
import s from './css/Footer.module.scss'
import {shallowEqual, useSelector} from "react-redux"

function Footer() {

    const addresses = useSelector(store => store.addresses, shallowEqual)

    const cellsMarkup = addresses.map((cellData, i) => {

        const linkCls = s['adr-link'] + ' black-link ' + s['adr-link__' + cellData.prefix]

        return (
            <div className={s['adr__cell']} key={i}>
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