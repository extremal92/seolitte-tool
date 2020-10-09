import axios from 'axios'

export const setLoadet = (payload) => ({
    type: 'SET_LOADED',
    payload,
})

export const fetchPerson = () => (dispatch) => {
    dispatch(setLoadet(false));
    axios.get('http://localhost:3001/person')
    .then(({ data }) => {
        dispatch(setPerson(data));
    });
};

export const setPerson = (items) => ({
    type: 'SET_PERSON',
    payload: items,
})
