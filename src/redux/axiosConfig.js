import axios from 'axios';

let api = '/api/v1';

api = `http://192.168.8.101:5000${api}`;

export default axios.create({
  baseURL: api,
});