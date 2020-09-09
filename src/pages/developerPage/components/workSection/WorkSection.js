// import React from 'react'
/*import {
    createGitHubLink,
    createImages,
    createTags,
    getDescription, getHeaderText,
    getLinkData,
    getLogoSrc
} from "./js/resources"*/
// import s from './css/WorkSection.module.scss'


/*function WorkSection({type, page}) {

    // Логотип
    const logoSrc = getLogoSrc(type)
    let logo = null
    if(logoSrc) logo = <img src={logoSrc} className={s.logo} alt={type} />

    // Заголовок
    const headerText = getHeaderText(type)
    let header = null
    if(headerText) header = <h1 className={s.header} >{headerText}</h1>

    // Ссылка на сайт
    const linkData = getLinkData(type)
    const link = linkData
        ? <p className={s['site-link']}><a href={linkData.href}>{linkData.name}</a></p>
        : null

    // Описание
    const description = <p className={s.description}>{getDescription(type, page)}</p>

    // Технологии
    const tags = createTags(type, page)
    let wrappedTags = tags ? <div className={s.tags}>{tags}</div> : null

    // Код на GitHub
    const gitHub = <div>
        {createGitHubLink(type)}
    </div>

    // Картинки
    const images = createImages(type, page)
    const wrappedImages = <div className={s.images}>{images}</div>

    return (
        <>
            {logo}
            {header}
            {link}
            {description}
            {wrappedTags}
            {gitHub}
            {wrappedImages}
        </>
    )
}*/

// export default WorkSection