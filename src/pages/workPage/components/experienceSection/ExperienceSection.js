import React from 'react'
import {getData} from "./js/resources"
import s from './css/ExperienceSection.module.scss'
import gallerySectionStyles from '../../components/gallerySection/css/GallerySection.module.scss'


function ExperienceSection() {
    const items = getData().map( (data, i) => {
            return (
                <section className={s.experience} key={i}>
                    <h3 className={s['experience__header']}>
                        {data.company}
                    </h3>
                    <p className={s['experience__duration']}>
                        {data.duration}
                    </p>
                    <h4 className={s['experience__position']}>
                        {data.position}
                    </h4>
                    <p className={s['experience__description']}>
                        {data.description}
                    </p>
                </section>
            )
        })

    return (
        <>
            <h2 className={gallerySectionStyles.header} style={{marginBottom: '2rem'}}>Инструменты</h2>
            {items}
        </>
    )
}


export default ExperienceSection