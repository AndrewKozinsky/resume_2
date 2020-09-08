import {createStore} from 'redux'

const initialState = {
    addresses: [
        {
            prefix: 'mail',
            text: 'andkozinsky@gmail.com',
            href: 'mailto:andkozinsky@gmail.com'
        },
        {
            prefix: 'phone',
            text: '8 919 84-23-599',
            href: 'tel:+79198425599'
        },
        {
            prefix: 'skype',
            text: 'andkozinskiy',
            href: 'skype:andkozinskiy?chat'
        },
        {
            prefix: 'telegram',
            text: '@AndrewKozinsky',
            href: 'telegram:AndrewKozinsky'
        },
        {
            prefix: 'hh',
            text: 'hh.ru',
            href: 'https://orenburg.hh.ru/resume/17738216ff063294920039ed1f6852426c6f6a'
        },
        {
            prefix: 'github',
            text: 'github.com',
            href: 'https://github.com'
        }
    ]
}

function reducer(store = initialState, action) {
    switch (action.type) {
        case 'test':
            return console.log('test')
        default:
            return store
    }
}

export default createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)