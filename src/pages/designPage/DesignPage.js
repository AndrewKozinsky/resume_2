import React from 'react';
import AboutIntro from "../../components/aboutIntro"
import {useLocation} from "react-router-dom"
import ToolsSection from "../developerPage/components/toolsSection"
import ExperienceSection from "../developerPage/components/experienceSection"
import WorkSection from "../developerPage/components/workSection"
import PortfolioMenu from "../../components/portfolioMenu"
import PortfolioGrid from "../../components/portfolioGrid"
import AboutDetails from "../../components/aboutDetails"


function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function DesignPage() {

    // Объект запроса в URL
    let query = useQuery()

    // Вводный текст
    const introTextArr = [
        'Я оформитель сайтов и пользовательских интерфейсов.',
        'Люблю вникать в суть проекта и находить правильные смыслы.',
        'В настоящий момент не ищу работу по этой специализации.',
    ]

    // Конфигурация меню
    const menuConfig = [
        {
            name: null,
            items: [
                {
                    title: 'Kflex.ru',
                    query: 'kflex'
                },
                {
                    title: 'Rusheat.ru',
                    query: 'rusheat'
                },
                {
                    title: 'Письма',
                    query: 'letters'
                },
                {
                    title: 'Volсano.ru',
                    query: 'volcano'
                },
                {
                    title: 'Тепломаш.рф',
                    query: 'teplomash'
                },
                {
                    title: 'Ремпласт',
                    query: 'remplast'
                },
                {
                    title: 'Отель LaBandada',
                    query: 'labandada'
                },
                {
                    title: 'Диетическое питание «Про вкус»',
                    query: 'provkus'
                },
                {
                    title: 'Взыскание долгов',
                    query: 'accomplies'
                },
                {
                    title: 'Деньги под залог авто',
                    query: 'autobuyer'
                },
                {
                    title: 'Двери Buldoors',
                    query: 'buldoors'
                },
                {
                    title: 'Обучении в Австрии',
                    query: 'austria'
                },
                {
                    title: 'Коктейли Prana',
                    query: 'prana'
                },
            ]
        }
    ]


    // Раздел с работой
    let portfolioWork = <WorkSection type={query.get("work") || 'kflex'} page='designer' />

    return (
        <div>
            <AboutIntro content={introTextArr} />
            <AboutDetails type='designer' />
            <PortfolioGrid>
                <PortfolioMenu config={menuConfig} pageType='designer' />
                {portfolioWork}
            </PortfolioGrid>
        </div>
    )
}

export default DesignPage