

// Table DEV
import todo_1_webm_dev from './video/todo_dev/todo_1.webm'
import todo_1_ogv_dev from './video/todo_dev/todo_1.ogv'
import todo_1_mp4_dev from './video/todo_dev/todo_1.mp4'


export default function getImagesSrc(workAlias) {

    const todo_dev = [
        {
            webm: todo_1_webm_dev,
            ogv: todo_1_ogv_dev,
            mp4: todo_1_mp4_dev
        }
    ]


    switch (workAlias) {
        case 'todo_dev': return todo_dev
        default: return null
    }
}
