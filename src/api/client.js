import axios from 'axios';

const baseURL = 'https://nnc.signalstudio.io';

const client = axios.create({
  baseURL,
});

export default client;
