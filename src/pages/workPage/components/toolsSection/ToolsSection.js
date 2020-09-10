import React from 'react'
import {getSecondToolsData, getToolsData} from "./js/resources"
import s from './css/ToolsSection.module.scss'
import gallerySectionStyles from '../../components/gallerySection/css/GallerySection.module.scss'


function ToolsSection() {

    return <>
        <h2 className={gallerySectionStyles.header} style={{marginBottom: '2rem'}}>Инструменты</h2>

        {getToolsData().map( (data, i) => Tool(data, i))}

        <div className={s.separator} />

        {getSecondToolsData().map( (data, i) => SecondTool(data, i))}

        <div className={s.separator} />

        <p className={s.english}>Английский для чтения документации</p>

        <div className={s.programs}>
            <p className={s['programs__left']}>WebStorm</p>
            <p className={s['programs__right']}>
                <span className={s['programs__right-item']}>Sketch</span>
                <span className={s['programs__right-item']}>Figma</span>
                <span className={s['programs__right-item']}>PS</span>
                <span className={s['programs__right-item']}>AI</span>
            </p>
        </div>
    </>
}


// Компонент главного инструмента
function Tool(data, i) {
    const subTools = data.subTools.map(subToolName => {
        return <span className={s['tool__subtool']} key={subToolName}>{subToolName}</span>
    })

    const sign = data.sign
        ? <img src={data.sign} className={s['tool__sign']} alt={data.name} />
        : null

    return <div className={s.tool} key={i}>
        <h3 className={s['tool__name']}>{data.name}{sign}</h3>
        <div className={s['tool__subtools']}>{subTools}</div>
        <p className={s['tool__details']}>
            <span className={s['tool__detail']}>Опыт: <span className={s['tool__detail-backlight']}>{data.experience}</span></span>
            <span className={s['tool__detail']}>Уровень: <span className={s['tool__detail-backlight']}>{data.level}</span></span>
        </p>
    </div>
}

function SecondTool(toolData, i) {
    const sign = toolData.sign
        ? <img src={toolData.sign} className={s['second-tool__sign']} alt={toolData.name} />
        : null

    return <div className={s['second-tool']} key={i}>
        <h3 className={s['second-tool__header']}>
            {sign}
            {toolData.name}
        </h3>
        <p className={s['second-tool__text']}>{toolData.text}</p>
    </div>
}




export default ToolsSection