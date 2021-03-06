import React from 'react'
import MicroParagraph from "./components/microParagraph"
import SalaryPlate from "./components/salaryPlate"
import s from './css/AboutDetails.module.scss'

function AboutDetails({pageType}) {
    if(pageType === 'develop') return <DetailsAboutDeveloper />
    else if(pageType === 'design') return <DetailsAboutDesigner />
}

function DetailsAboutDeveloper() {
    return (
        <section className={s['dev-wrapper']}>
            <div>
                <MicroParagraph header='Опыт в вёрстке' text='Порядка 5 лет я переодически занимаюсь вёрсткой сайтов или обновлением существующих страниц. Стараюсь следить за семантичностью и доступностью элементов сайта, использовать анимацию для улучшения интерфейса, писать код чтобы сайт хорошо смотрелся и на телефоне и на 27-и дюймовом экране.' key='2' />
                <MicroParagraph header='Не чуждо чувство прекрасного' text='Я разработчик с большим опытом в проектировании и отрисовке сайтов. При написании кода я использую свои знания и стремлюсь сделать каждый интерфейс функциональным, логичным, дружелюбным и простым.' key='1' />
            </div>
            <div>
                <MicroParagraph header='Стремлюсь стать разработчиком полного цикла' text='Мне интересна каждая часть процесса разработки сайта или интерфейса. Именно поэтому я не только освоил оформление и верстку сайта, но и стремлюсь писать код на стороне сервера.' key='3' />
                <SalaryPlate key='4' />
            </div>
        </section>
    )
}

function DetailsAboutDesigner() {
    return (
        <section className={s['dev-wrapper']}>
            <div>
                <MicroParagraph header='Сначала полезность, потом красота' text='Я считаю, что сайт прежде всего должен приносить пользу и понятно о ней рассказывать. И уже этот материал нужно упаковывать в красивую обёртку для придания законченного и привлекательного вида.' key='2' />
            </div>
            <div>
                <MicroParagraph header='Опыт создания проектов от идеи до реализации' text='Мне интересен весь процесс создания проекта. Поэтому я занимался составлением первоначальных требований, рисовал черновики, затем оформление страниц, верстал шаблоны и помогал программисту внедрить их на систему управления.' key='1' />
            </div>
        </section>
    )
}

export default AboutDetails