export default function getMenuConfig(pageType) {

    const designerMenu = [
        {
            name: null,
            items: [
                {
                    title: 'Kflex.ru',
                    query: 'kflex_des'
                },
                {
                    title: 'Rusheat.ru',
                    query: 'rusheat_des'
                },
                {
                    title: 'Письма',
                    query: 'letters_des'
                },
                {
                    title: 'Volсano.ru',
                    query: 'volcano_des'
                },
                {
                    title: 'Тепломаш.рф',
                    query: 'teplomash_des'
                },
                {
                    title: 'Ремпласт',
                    query: 'remplast_des'
                },
                {
                    title: 'Отель LaBandada',
                    query: 'labandada_des'
                },
                {
                    title: 'Диетическое питание «Про вкус»',
                    query: 'provkus_des'
                },
                {
                    title: 'Взыскание долгов',
                    query: 'accomplies_des'
                },
                {
                    title: 'Деньги под залог авто',
                    query: 'autobuyer_des'
                },
                {
                    title: 'Двери Buldoors',
                    query: 'buldoors_des'
                },
                {
                    title: 'Обучении в Австрии',
                    query: 'austria_des'
                },
                {
                    title: 'Коктейли Prana',
                    query: 'prana_des'
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
                    query: 'tools_dev'
                }
            ]
        },
        {
            name: null,
            items: [
                {
                    title: 'Опыт работы',
                    query: 'experience_dev'
                }
            ]
        },
        {
            name: 'React',
            items: [
                {
                    title: 'Дилетантские чтения',
                    query: 'readings_dev'
                },
                {
                    title: 'Таблица с элементами управления',
                    query: 'table_dev'
                },
                {
                    title: 'Список дел',
                    query: 'todo_dev'
                },
                {
                    title: 'Остальные работы',
                    query: 'another_dev'
                }
            ]
        },
        {
            name: 'Вёрстка',
            items: [
                {
                    title: 'Kflex.ru',
                    query: 'kflex_dev'
                },
                {
                    title: 'Фрико.рус',
                    query: 'friko_dev'
                },
                {
                    title: 'Volсano.ru',
                    query: 'volcano_dev'
                },
                {
                    title: 'Rusheat.ru',
                    query: 'rusheat_dev'
                },
                {
                    title: 'Тепломаш.рф',
                    query: 'teplomash_dev'
                },
            ]
        },
    ]

    if(pageType === 'develop') return developerMenu
    else if(pageType === 'design') return designerMenu
}