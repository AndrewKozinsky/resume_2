export default function getMenuConfig(pageType) {

    const designerMenu = [
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

    const developerMenu = [
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
                },
                {
                    title: 'Остальные работы',
                    query: 'another'
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
    ]

    if(pageType === 'developer') return developerMenu
    else if(pageType === 'designer') return designerMenu
}