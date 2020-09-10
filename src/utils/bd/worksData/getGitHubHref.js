

export default function getGitHubHref(workAlias) {

    switch (workAlias) {
        case 'readings_dev': return 'https://github.com/AndrewKozinsky/diletant'
        case 'table_dev': return 'https://github.com/AndrewKozinsky/interactive-table-at-react'
        case 'todo_dev': return 'https://github.com/AndrewKozinsky/node-todo'
        default: return null
    }
}