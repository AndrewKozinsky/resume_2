
export default function getDescription(workAlias) {
    switch (workAlias) {
        case 'readings_dev': return 'Концепция сайта «Дилетантских чтений»'
        case 'todo_dev': return 'Небольшое приложение на MERN для ведения дел. В действии: https://www.youtube.com/watch?v=OIZQmQ4S_bk'
        case 'table_dev': return 'Интерактивная таблица'
        case 'kflex_dev': return 'Придумал, нарисовал и сверстал страницы и иллюстрации каталога теплоизоляционных материалов К-Flex. Код писал в стиле jQuery. Поставить на систему управления помог программист.'
        case 'friko_dev': return 'Придумал, нарисовал и сверстал страницы и иллюстрации каталога про тепловое оборудование Фрико. Код писал в стиле jQuery. Поставить на систему управления помог программист.'
        case 'volcano_dev': return 'Придумал, нарисовал и сверстал страницы и иллюстрации каталога про оборудование Волкано. Код писал в стиле jQuery.'
        case 'rusheat_dev': return 'Придумал, нарисовал и сверстал страницы и иллюстрации магазина климатического оборудования. Код писал в стиле jQuery.'
        case 'teplomash_dev': return 'Придумал, нарисовал и сверстал страницы и иллюстрации каталога климатической техники «Тепломаш». Код писал в стиле jQuery.'

        case 'kflex_des': return 'Макеты сайта про теплоизоляционные материалы.'
        case 'volcano_des': return 'Макеты сайта про оборудование Volcano.'
        case 'rusheat_des': return 'Макеты сайта про климатическую технику и материалы.'
        case 'teplomash_des': return 'Макеты сайта про оборудование Тепломаш.'
        case 'accomplies_des': return 'Одностраничник про взыскание долгов.'
        case 'austria_des': return 'Сайт про обучение в Австрии.'
        case 'autobuyer_des': return 'Деньги под залог авто.'
        case 'buldoors_des': return 'Сайт про двери.'
        case 'labandada_des': return 'Макеты сайта про аргентинский отель.'
        case 'prana_des': return 'Сайт про диетическое питание.'
        case 'provkus_des': return 'Макеты сайта про диетическое питание.'
        case 'remplast_des': return 'Макеты сайта про ремонт пластиковых окон.'
        case 'letters_des': return 'Макеты информационных и поздравительных писем отправляемых клиентам компании «Русхит».'

        default: return ''
    }
}