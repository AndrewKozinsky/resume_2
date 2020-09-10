import React from 'react'
import {useQuery} from "../../utils/workWithUrl"

import AboutIntro from "../../components/aboutIntro"
import AboutDetails from "../../components/aboutDetails"
import PortfolioGrid from "../../components/portfolioGrid"
import PortfolioMenu from "../../components/portfolioMenu"
// import ToolsSection from "./components/toolsSection"
// import ExperienceSection from "./components/experienceSection"
// import WorkSection from "./components/workSection"
// import AnotherWorksSection from "./components/anotherWorksSection/AnotherWorksSection"




function DeveloperPage() {

    // Объект запроса в URL
    // let query = useQuery()


    // Раздел с работой
    // let portfolioWork = <ToolsSection />
    // let portfolioWork = <p>Work</p>

    /*switch (query.get("work")) {
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
        case 'another': portfolioWork = <AnotherWorksSection />; break;
    }*/

    /*return (
        <>
            <AboutIntro pageType='develop' />

            <AboutDetails pageType='develop' />
            <PortfolioGrid>
                <PortfolioMenu pageType='develop' />
                {portfolioWork}
            </PortfolioGrid>
        </>
    )*/
}

export default DeveloperPage