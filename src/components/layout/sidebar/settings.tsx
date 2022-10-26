import { Link } from 'react-router-dom';
import { ISidebarItem } from './data.tsx';
import { Dispatch, SetStateAction } from 'react';

interface ISettingsProps {
  selection : ISidebarItem[],
  setActiveLink : Dispatch<SetStateAction<boolean>>
}

export const Settings: React.FC<ISettingsProps> = ({ selection, setActiveLink }) => {

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
