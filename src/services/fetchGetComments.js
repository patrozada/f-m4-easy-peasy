const ENDPOINT = 'url';

const fetchGetComments = () => fetch(ENDPOINT).then(res => res.json());

export { fetchGetComments };
