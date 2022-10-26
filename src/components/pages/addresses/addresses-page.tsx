import { useEffect, useState } from 'react';
import { getAddress } from './api';

import './addresses.scss';

export const Addresses: React.FC = () => {

  const [state, setState] = useState([])
  const [inputState, setInputState] = useState<string>('')

  const searchHandler = async () => {
    if (inputState.trim().length > 2) {
      const adresses = await getAddress(inputState)
      setState(adresses)
    }
  }

  return (
    <div className='addresses'>
      <header>
        <h3 className='addresses__title'>Поиск адресов</h3>
        <h3 className='addresses__sub-title'>Введите интересующий вас адрес</h3>
      </header>
      <main>
      <form className='addresses__input input'>
        <input
          id='input'
          type='text'
          className='input-value'
          placeholder='Введите интересующий вас адрес'
          value={inputState}
          onChange={(event: React.FormEvent<HTMLInputElement>) => setInputState(event.currentTarget.value)}
        />
        <button className='input-button button' type='button' onClick={searchHandler}>Поиск</button>
      </form>
      <div className='addresses__results'>
        <h3 className='results__title'>Адреса</h3>
        <ul className='results__wrapper'>
          { state.map(({ value }) => <li className='results__item'>{value}</li>) }
        </ul>
      </div>
      </main>
    </div>
  )
}
