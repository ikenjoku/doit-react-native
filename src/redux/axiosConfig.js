import axios from 'axios';

let api = 'https://ikenjoku-doit.herokuapp.com/api/v1';

export default axios.create({
  baseURL: api,
});