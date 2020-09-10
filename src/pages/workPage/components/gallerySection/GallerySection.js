import React from 'react'
import db from '../../../../utils/bd/bd'
/*import {
    createGitHubLink,
    createImages,
    createTags,
    getDescription, getHeaderText,
    getLinkData,
    getLogoSrc
} from "./js/resources"*/
import s from './css/GallerySection.module.scss'
import {createImages, createVideos} from "./js/resources"


function GallerySection({workAlias}) {

    // Получу данные о работе
    const workData = db.getWorkData(workAlias)
    // console.log(workData)

    // Заголовок
    const header = <h1 className={s.header} >{workData.header}</h1>

    // Ссылка на сайт
    const link = workData.link
        ? <p className={s['site-link']}><a href={workData.link.href}>{workData.link.name}</a></p>
        : null

    // Описание
    const description = <p className={s.description}>{workData.description}</p>

    // Теги
    let tags = db.getWorkData(workAlias).tags
    if(tags) {
        const tagsElems = tags.map(name => {
            return <span className={s['tags__tag']} key={name}>{name}</span>
        })
        tags = <div className={s.tags}>{tagsElems}</div>
    }


    // Код на GitHub
    let gitHub = db.getWorkData(workAlias).github
    if(gitHub) {

        gitHub = <div>
            <a href={gitHub} className={s['github-button']}>
                Код на GitHub
            </a>
        </div>
    }

    // Видео
    let videos = workData.videos
    if(videos) {
        const videosArr = createVideos(videos)
        videos = <div className={s.videos}>{videosArr}</div>
    }

    // Картинки
    let images = workData.images
    if(images) {
        const imagesArr = createImages(images)
        images = <div className={s.images}>{imagesArr}</div>
    }

    return (
        <>
            {header}
            {link}
            {description}
            {tags}
            {gitHub}
            {videos}
            {images}
        </>
    )
}

export default GallerySection