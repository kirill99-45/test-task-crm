import axios from 'axios';

const URL = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
const TOKEN = "38535e107cde1c35818284c85381c054132a76ec";

const config = {
  method : "POST",
  mode : "cors",
  headers : {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "authorization": "Token " + TOKEN,
  },
}

export const getAddress = async (query) => {
  const { suggestions } = await axios.post(URL, JSON.stringify({ query }), config)
    .then(resp => resp.data)
  return suggestions
}
