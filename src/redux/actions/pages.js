import axios from 'axios'

export const setLoadet = (payload) => ({
    type: 'SET_LOADED',
    payload,
})

export const fetchPages = () => (dispatch) => {
    dispatch(setLoadet(false));
    axios.get('http://localhost:3001/pages/')
    .then(({ data }) => {
        dispatch(setPages(data));
    });
};

export const setPages = (items) => ({
    type: 'SET_PAGES',
    payload: items,
})
