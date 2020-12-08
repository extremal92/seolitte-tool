import axios from 'axios'

export const setLoadet = (payload) => ({
    type: 'SET_LOADED',
    payload,
})

export const fetchBlog = () => (dispatch) => {
    dispatch(setLoadet(false));
    axios.get('http://localhost:3001/blog')
    .then(({ data }) => {
        dispatch(setBlog(data));
    });
};

export const setBlog = (items) => ({
    type: 'SET_BLOG',
    payload: items,
})
