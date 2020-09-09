import React from 'react'
import bd from "../../utils/bd/bd"

import myPhotoWebP from './img/my_photo.webp'
import myPhotoWebP_2x from './img/my_photo@2x.webp'
import myPhotoJpeg from './img/my_photo.jpg'
import myPhotoJpeg_2x from './img/my_photo@2x.jpg'

import s from './css/AboutIntro.module.scss'


function AboutIntro({pageType}) {

    return (
        <section className={s.about}>
            <div className={s['about__photo-side']}>
                <MyPhoto />
            </div>
            <div className={s['about__text-side']}>
                <TextContent pageType={pageType} />
            </div>
        </section>
    )
}


function TextContent({pageType}) {
    // Получу массив параграфов вводного текста в зависимости от pageType
    const aboutTextArr = bd.getAboutIntroText(pageType)

    // Разметка с абзацами
    return aboutTextArr.map((text, i) => {
        return <p className={s.text} key={i}>{text}</p>
    })
}


function MyPhoto() {
    const srcSetLargeWebP = myPhotoWebP + ", " + myPhotoWebP_2x + ' 2x'
    const srcSetLargeJpeg = myPhotoJpeg + ", " + myPhotoJpeg_2x + ' 2x'

    return <picture>
        <source media="(max-width: 799px)" type="image/webp" srcSet={myPhotoWebP} />
        <source media="(max-width: 799px)" type="image/jpeg" srcSet={myPhotoJpeg} />

        <source media="(min-width: 800px)" type="image/webp" srcSet={srcSetLargeWebP} />
        <source media="(min-width: 800px)" type="image/jpeg" srcSet={srcSetLargeJpeg} />

        <img src={myPhotoJpeg} className={s.photo} alt='Андрей Козинский'/>
    </picture>
}


export default AboutIntro