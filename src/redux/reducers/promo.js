const initialState = {
    items: [],
    isLoaded: false
}
const promo = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PROMO':
            return{
                ...state,
                items: action.payload,
                isLoaded: true
    
            }
        default:
            return state;
    }
}

export default promo;
