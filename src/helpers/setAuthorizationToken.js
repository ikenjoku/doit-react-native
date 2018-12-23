import axios from 'axios';

const setAuthorizationToken = (token) => {
  if (token) {
    axios.defaults.headers.common['x-access-token'] = token;
  } else {
    axios.defaults.headers.common['x-access-token'] = '';
  }
};

export default setAuthorizationToken;