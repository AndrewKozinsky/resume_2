



export default function getWorkHeaderText(workAlias) {
    switch (workAlias) {
        case 'readings_dev': return 'Дилетантские чтения'
        case 'todo_dev': return 'Список дел'
        case 'table_dev': return 'Таблица с элементами управления'

        case 'kflex_dev':
        case 'kflex_des': return 'Сайт про термоизоляционные материалы K-Flex'
        case 'friko_dev':
        case 'friko_des': return 'Сайт про оборудование Friсo'
        case 'volcano_dev':
        case 'volcano_des': return 'Сайт о тепловентиляторах Volcano'
        case 'rusheat_dev':
        case 'rusheat_des': return 'Каталог климатической техники и материалов'
        case 'teplomash_dev':
        case 'teplomash_des': return 'Каталог оборудования «Тепломаш»'

        case 'accomplies_des': return 'Взыскание долгов'
        case 'austria_des': return 'Обучение в Австрии'
        case 'autobuyer_des': return 'Деньги под залог авто'
        case 'buldoors_des': return 'Двери Buldoors'
        case 'labandada_des': return 'Сайт отеля'
        case 'maed_des': return 'maed'
        case 'prana_des': return 'Коктейли Prana'
        case 'provkus_des': return 'Диетическое питание «Про вкус»'
        case 'remplast_des': return 'Ремонт пластиковых окон'
        case 'letters_des': return 'Различные письма'

        default: return null
    }
}