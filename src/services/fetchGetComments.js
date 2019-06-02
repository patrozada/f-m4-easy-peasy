import * as api from './api';

const ENDPOINT = api.API_BASE;

const fetchGetComments = () => fetch(ENDPOINT).then(res => res.json());

export { fetchGetComments };
