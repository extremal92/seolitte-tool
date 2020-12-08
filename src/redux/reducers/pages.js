const initialState = {
    items: [],
    isLoaded: false
}
const pages = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PAGES':
            return{
                ...state,
                items: action.payload,
                isLoaded: true
    
            }
        default:
            return state;
    }
}

export default pages;
