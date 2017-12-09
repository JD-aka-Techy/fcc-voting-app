import axios from 'axios';
import * as constants from './constants';

export const loadAllPolls = () => dispatch => {
    axios.get('api/allPolls')
    .then(res => {
        dispatch({ type: constants.UPDATE_POLLS, payload: res.data });
    });
}

export const loadPollsForUser = (username) => dispatch => {
    const url = `api/usersPolls/${username}`;
    axios.get(url)
    .then(res => {
        dispatch({ type: constants.UPDATE_MY_POLLS, payload: res.data });
    });
}