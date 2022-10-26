import axios from 'axios';

const URL = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
const TOKEN = process.env.REACT_APP_API_KEY

const config = {
  method : "POST",
  mode : "cors",
  headers : {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "authorization": "Token " + TOKEN,
  },
}

export const getAddress = async (query: string) => {
  const { suggestions } = await axios.post(URL, JSON.stringify({ query }), config)
    .then(resp => resp.data)
  return suggestions
}
