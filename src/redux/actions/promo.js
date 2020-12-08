import axios from 'axios'

export const setLoadet = (payload) => ({
    type: 'SET_LOADED',
    payload,
})

export const fetchPromo = () => (dispatch) => {
    dispatch(setLoadet(false));
    axios.get('http://localhost:3001/promo')
    .then(({ data }) => {
        dispatch(setPromo(data));
    });
};

export const setPromo = (items) => ({
    type: 'SET_PROMO',
    payload: items,
})
