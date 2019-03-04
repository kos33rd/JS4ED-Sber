import { createStore, combineReducers } from 'redux'


const initialState = {
    characters: []
}

const reducer = (prevState, action) => {
    console.log('Reducer called with action:', action)
    
    if (action.type === 'SAVE_CHARACTERS_TO_STORE') {
        return {
            characters: action.characters
        }
    }

    return initialState
}

export const store = createStore(reducer)
