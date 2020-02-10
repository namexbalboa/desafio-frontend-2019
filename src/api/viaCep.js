import axios from 'axios';

export default {
    viaCep (zip) {
      return axios.get('https://viacep.com.br/ws/' + zip + '/json/')
    },
  }