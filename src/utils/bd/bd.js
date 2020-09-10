import contactsList from './resources/contactsList'
import getAboutIntroText from "./resources/aboutIntroText"
import getMenuConfig from "./resources/menuConfig"

import getWorkHeaderText from "./worksData/getHeader"
import getWorkLinkHref from "./worksData/getLink"
import getDescription from "./worksData/getDescription"
import getTags from "./worksData/getTags"
import getGitHubHref from "./worksData/getGitHubHref"
import getImagesSrc from "./worksData/getImagesSrc"
import getVideoSrc from "./worksData/getVideoSrc"


// Класс псевдо «базы данных» возвращающий различные данные
class BD {
    // Массив способов связи со мной
    getContactsList() {
        return contactsList
    }

    // Вводный текст обо мне
    getAboutIntroText(pageType) {
        return getAboutIntroText(pageType)
    }

    // Список пунктов меню
    getMenuConfig(pageType) {
        return getMenuConfig(pageType)
    }

    // Список пунктов меню
    getWorkData(workAlias) {
        return {
            header: getWorkHeaderText(workAlias),
            link: getWorkLinkHref(workAlias),
            description: getDescription(workAlias),
            tags: getTags(workAlias),
            github: getGitHubHref(workAlias),
            videos: getVideoSrc(workAlias),
            images: getImagesSrc(workAlias)
        }
    }
}

export default new BD()