

export default function getTags(workAlias) {

    switch (workAlias) {
        case 'friko_dev': return ['БЭМ', 'Адаптивная вёрстка', 'SCSS', 'Семантическая вёрстка', 'Flex', 'Grid', 'Bootstrap', 'Ретина']
        case 'kflex_dev': return ['БЭМ', 'Адаптивная вёрстка', 'SCSS', 'Семантическая вёрстка', 'Flex', 'Grid', 'Bootstrap', 'Ретина']
        case 'rusheat_dev': return ['Адаптивная вёрстка', 'CSS', 'Bootstrap', 'Ретина']
        case 'teplomash_dev': return ['Адаптивная вёрстка', 'CSS', 'Bootstrap', 'Ретина']
        case 'volcano_dev': return ['Адаптивная вёрстка', 'CSS', 'Bootstrap', 'Ретина']
        case 'readings_dev': return ['Адаптивная вёрстка', 'React', 'SCSS']
        case 'table_dev': return ['Адаптивная вёрстка', 'React', 'SCSS']
        case 'todo_dev': return ['Node.js', 'React', 'SCSS']
        default: return null
    }
}