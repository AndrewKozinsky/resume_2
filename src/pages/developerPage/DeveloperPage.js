import React from 'react'
import {useLocation} from "react-router-dom"

import AboutIntro from "../../components/aboutIntro"
import AboutDetails from "../../components/aboutDetails"
import PortfolioGrid from "../../components/portfolioGrid"
import PortfolioMenu from "../../components/portfolioMenu"
import ToolsSection from "./components/toolsSection"
import ExperienceSection from "./components/experienceSection"
import WorkSection from "./components/workSection"


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function DeveloperPage() {

    // Объект запроса в URL
    let query = useQuery()

    // Вводный текст
    const introTextArr = [
        'Я верстальщик сайтов и пользовательских интерфейсов.',
        'Мой подход — разобраться в задаче, заранее увидеть подводные камни и сделать всё в срок без напоминаний.',
        'Буду рад стать частью команды создающей технологичные веб-системы.'
    ]

    // Конфигурация меню
    const menuConfig = [
        {
            name: null,
            items: [
                {
                    title: 'Инструменты',
                    query: 'tools'
                }
            ]
        },
        {
            name: null,
            items: [
                {
                    title: 'Опыт работы',
                    query: 'experience'
                }
            ]
        },
        {
            name: 'Вёрстка',
            items: [
                {
                    title: 'Kflex.ru',
                    query: 'kflex'
                },
                {
                    title: 'Фрико.рус',
                    query: 'friko'
                },
                {
                    title: 'Volсano.ru',
                    query: 'volcano'
                },
                {
                    title: 'Rusheat.ru',
                    query: 'rusheat'
                },
                {
                    title: 'Тепломаш.рф',
                    query: 'teplomash'
                },
            ]
        },
        {
            name: 'React',
            items: [
                {
                    title: 'Дилетантские чтения',
                    query: 'readings'
                },
                {
                    title: 'Таблица с элементами управления',
                    query: 'table'
                },
                {
                    title: 'Список дел',
                    query: 'todo'
                }
            ]
        },
    ]


    // Раздел с работой
    let portfolioWork = <ToolsSection />

    switch (query.get("work")) {
        case 'tools': portfolioWork = <ToolsSection />; break;
        case 'experience': portfolioWork = <ExperienceSection />; break;
        case 'kflex':
        case 'friko':
        case 'volcano':
        case 'rusheat':
        case 'teplomash': portfolioWork = <WorkSection type={query.get("work")} page='developer' />; break;
        case 'readings': portfolioWork = <WorkSection type={query.get("work")} page='developer' />; break;
        case 'table': portfolioWork = <WorkSection type={query.get("work")} page='developer' />; break;
        case 'todo': portfolioWork = <WorkSection type={query.get("work")} page='developer' />; break;
    }

    return (
        <>
            <AboutIntro content={introTextArr} />
            <AboutDetails type='developer' />
            <PortfolioGrid>
                <PortfolioMenu config={menuConfig} pageType='developer' />
                {portfolioWork}
            </PortfolioGrid>
        </>
    )
}

export default DeveloperPage