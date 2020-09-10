import React from 'react'
// import s from '../css/WorkSection.module.scss'







export function createImages(imagesArr) {

    return imagesArr.map(srcsObj => {
        return createPicture(srcsObj)
    })
}

function createPicture(srcsObj) {

    const sourses = []

    let imageSrcSet

    if(srcsObj.img_1) {
        let srcSet = srcsObj.img_1
        if(srcsObj.img_1_2x) srcSet += `, ${srcsObj.img_1_2x} 2x`

        imageSrcSet = srcSet

        sourses.push(
            <source srcSet={srcSet} key='1' />
        )
    }

    if(srcsObj.img_2) {
        let srcSet = srcsObj.img_2
        if(srcsObj.img_2_2x) srcSet += `, ${srcsObj.img_2_2x} 2x`

        imageSrcSet = srcSet

        sourses.push( <source srcSet={srcSet} key='2' /> )
    }

    return <picture key={srcsObj.img_1}>
        {sourses}
        <img src={srcsObj.img_1} srcSet={imageSrcSet} alt={'ggg'}/>
    </picture>
}



export function createVideos(videosArr) {
    return videosArr.map((srcsObj, i) => {
        return createVideo(srcsObj, i)
    })
}

function createVideo(srcsObj, i) {

    const sourses = []


    if(srcsObj.webm) {
        sourses.push( <source src={srcsObj.webm} type="video/webm" key='webm' /> )
    }
    if(srcsObj.ogv) {
        sourses.push( <source src={srcsObj.ogv} type="video/ogg" key='ogv' /> )
    }
    if(srcsObj.mp4) {
        sourses.push( <source src={srcsObj.mp4} type="video/mp4" key='mp4' /> )
    }


    return (
        <video id="video" autoPlay controls key={i}>
            {sourses}
        </video>
    )
}