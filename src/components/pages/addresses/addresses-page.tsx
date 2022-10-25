import './addresses.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Addresses: React.FC = () => {

  const URL = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
  const TOKEN = "38535e107cde1c35818284c85381c054132a76ec";
  const query = "новосибирск пирогова";

  const [state, setState] = useState({
    loading : false,
    data : [],
  })

  const options = {
      method: "POST",
      mode: "cors",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Token " + TOKEN
      },
      body: JSON.stringify({query: query})
  }

  fetch(URL, options)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log("error", error));

  // useEffect(() => {
  //   try {
  //     setState({...state, loading : true})
  //     axios.get(URL)
  //     .then(response => {
  //       console.log(response);
  //
  //       // setState({loading : false, data : response.data})1
  //     })
  //   } catch (error) {
  //     console.log(error);
  //
  //   }
  // })

  return (
    <div className='addresses'>
      <header>
        <h3 className='addresses__title'>Поиск адресов</h3>
        <h3 className='addresses__sub-title'>Введите интересующий вас адрес</h3>
      </header>
      <main>
      <form className='addresses__input input'>
        <input className='input-value' type='text' placeholder='Введите интересующий вас адрес' id='input' />
        <button className='input-button button' type='button' htmlFor='input'>Поиск</button>
      </form>
      <div className='addresses__results'>
        <h3 className='results__title'>Адреса</h3>
        <ul className='results__wrapper'>
          <li className='results__item'>город Москва, улица Ленина 13, дом 32</li>
          <li className='results__item'>город Москва, улица Ленина 13, дом 32</li>
        </ul>
      </div>
      </main>
    </div>
  )
}
