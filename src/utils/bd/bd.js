import contactsList from './resources/contactsList'
import getAboutIntroText from "./resources/aboutIntroText"
import getMenuConfig from "./resources/menuConfig"


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
}

export default new BD()