import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

import { IconHome, IconSearch, IconTables, IconCalendar, IconMap,
  IconDevises, IconSettings, IconSettingsUser, IconFinance, IconLogout, IconArrow
} from './icons/index.tsx';
import { Settings } from './settings.tsx';
import { sidebar } from './data.tsx';

import './sidebar.scss';

export const Sidebar: React.FC = () => {

  const { pathname }: string = useLocation()
  const setActiveLink = (to) => pathname === to ? 'nav__link active' : 'nav__link'

  const [settings, setSettings] = useState({
    isActive : false,
    icon : 'nav__arrow nav__arrow-down',
  })

  const settingsHandler = () => {
    setSettings({
      isActive : !settings.isActive,
      icon : settings.isActive === false ? 'nav__arrow nav__arrow-down' : 'nav__arrow',
    })
  }

  return (
    <div className='sidebar'>
      <nav className='sidebar__nav'>
        <h3>Меню</h3>
        <ul className='nav'>
          { sidebar.map((option, index) => {
              if (option.selection) {
                return (
                  <>
                    <button className='nav__button' type='button' onClick={settingsHandler} key={index}>
                      <img src={option.icon} className='nav__icon'/>
                      <li className='nav__item'>{option.title}</li>
                      <img src={IconArrow} className={settings.icon}/>
                    </button>
                    { settings.isActive && <Settings selection={option.selection} setActiveLink={setActiveLink}/> }
                  </>
                )} return (
                <Link className={setActiveLink(option.to)} to={option.to}>
                  <img src={option.icon} className='nav__icon'/>
                  <li className='nav__item'>{option.title}</li>
                  { option.contain && <img src={IconArrow} className='nav__arrow'/> }
                </Link>
              )
            })}
        </ul>
      </nav>
    </div>
  )
}
