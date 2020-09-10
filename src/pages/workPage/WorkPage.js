import React from 'react'
import AboutIntro from "../../components/aboutIntro"
import AboutDetails from "../../components/aboutDetails"
import PortfolioGrid from "../../components/portfolioGrid"
import PortfolioMenu from "../../components/portfolioMenu"
import {useQuery} from "../../utils/workWithUrl"
import bd from "../../utils/bd/bd"

import ToolsSection from "./components/toolsSection"
import ExperienceSection from "./components/experienceSection"
import AnotherWorksSection from "./components/anotherWorks"
import GallerySection from "./components/gallerySection"


function WorkPage({pageType}) {

    return (
        <>
            <AboutIntro pageType={pageType} />
            <AboutDetails pageType={pageType} />
            <PortfolioGrid>
                <PortfolioMenu pageType={pageType} />
                <PortfolioWork pageType={pageType} />
            </PortfolioGrid>
        </>
    )
}

function PortfolioWork({pageType}) {
    // Объект запроса в URL
    let query = useQuery()

    // Конфигурация меню
    const menuConfig = bd.getMenuConfig(pageType)

    // Получу название текущего пункта меню
    let currentWorkAlias = query.get("work") || menuConfig[0].items[0].query


    switch (currentWorkAlias) {
        case 'tools_dev': return <ToolsSection />;
        case 'experience_dev': return <ExperienceSection />;
        case 'another_dev': return <AnotherWorksSection />;
        default: return <GallerySection workAlias={currentWorkAlias} />;
    }
}


export default WorkPage