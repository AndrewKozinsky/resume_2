import React from 'react'
import {getData} from "./js/resources"
import s from './css/AnotherWorksSection.module.scss'


function ImagesSection() {
    return (
        getData().map( (data, i) => {
            return (
                <section className={s['another-work']} key={i}>
                    <h3 className={s['another-work__header']}>
                        {data.header}
                    </h3>
                    <p className={s['another-work__description']}>
                        {data.description}
                    </p>
                </section>
            )
        })
    )
}



export default ImagesSection