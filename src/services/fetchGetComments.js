import * as api from './api';

const ENDPOINT = '';

const fetchGetComments = () => fetch(ENDPOINT).then(res => res.json());

export { fetchGetComments };