import { Link } from 'react-router-dom';
import { ISidebarItem } from './data';
import { Dispatch, SetStateAction } from 'react';

interface IProps {
  selection : ISidebarItem[],
  setActiveLink : (to : string) => string,
}

export const Settings: React.FC<IProps> = ({ selection, setActiveLink }) => {

  return (
    <div className='settings'>
      { selection.map((select, index) => {
          return (
            <Link className={setActiveLink(select.to)} to={select.to} key={index}>
              <img src={select.icon} className='nav__icon'/>
              <li className='nav__item'>{select.title}</li>
            </Link>
          )
        })
      }
    </div>
  )
}
