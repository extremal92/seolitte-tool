const initialState = {
    items: [],
    isLoaded: false
}
const blog = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BLOG':
            return{
                ...state,
                items: action.payload,
                isLoaded: true
    
            }
        default:
            return state;
    }
}

export default blog;
