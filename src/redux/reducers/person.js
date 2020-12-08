const initialState = {
    items: [],
    isLoaded: false
}
const person = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PERSON':
            return{
                ...state,
                items: action.payload,
                isLoaded: true
    
            }
        default:
            return {...state};
    }
}

export default person;
