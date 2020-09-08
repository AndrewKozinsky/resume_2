import React from 'react'
import s from './css/MicroParagraph.module.scss'


function MicroParagraph({header, text}) {
    return (
        <article>
            <h3 className={s.header}>{header}</h3>
            <p className={s.text}>{text}</p>
        </article>
    )
}

export default MicroParagraph