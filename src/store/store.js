import {createStore} from 'redux'

const initialState = {

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