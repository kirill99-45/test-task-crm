import { Link } from 'react-router-dom';
import './sidebar.scss';
import IconHome from './icons/home.svg';
import IconSearch from './icons/search.svg';
import IconTables from './icons/tables.svg';
import IconCalendar from './icons/calendar.svg';
import IconMap from './icons/map.svg';
import IconDevises from './icons/devices.svg';
import IconSettings from './icons/settings.svg';
import IconSettingsUser from './icons/settings__user.svg';
import IconFinance from './icons/finance.svg';
import IconLogout from './icons/logout.svg';
import IconArrow from './icons/arrow.svg';
import { useState, useEffect } from 'react';

export const Sidebar: React.FC = () => {

  const arr = [
    {
     title : 'Главная',
     icon : IconHome,
     to: '/',
    },
    {
     title : 'Поиск адресов',
     icon : IconSearch,
     to: 'address',
    },
    {
     title : 'Таблицы',
     icon : IconTables,
     to: '#',
    },
    {
     title : 'Календарь',
     icon : IconCalendar,
     to: '#',
    },
    {
     title : 'Карты',
     icon : IconMap,
     to: '#',
    },
    {
     title : 'Виджеты',
     icon : IconDevises,
     to: '#',
    },
    {
     title : 'Настройки',
     icon : IconSettings,
     to: '#',
     contain : [
       {
         title : 'Настройки профиля',
         icon : IconSettingsUser,
         to: '#',
       },
       {
         title : 'Управление финансами',
         icon : IconFinance,
         to: '#',
       },
     ]
    },
    {
     title : 'Выход',
     icon : IconLogout,
     to: '#',
    },
  ]

  const [settings, setSettings] = useState({
    isActive : false,
    icon : 'nav__arrow nav__arrow-down',
  })

  const settingsHandler = () => {
    setSettings({
      isActive : !settings.isActive,
      icon : settings.icon === 'nav__arrow' ? 'nav__arrow nav__arrow-down' : 'nav__arrow',
    })
  }

  useEffect(() => {
    const handleClick = (event) => {
      if (event.target.closest('.nav__button') === null && !event.target.closest('.settings')) {
        setSettings({
          isActive : false,
          icon : settings.icon === 'nav__arrow' ? 'nav__arrow nav__arrow-down' : 'nav__arrow',
        })
      }
    }

    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
  })

  const Settings = ({ contain }) => {

    return (
      <div className='settings'>
        { contain.map(option => {
            return (
              <Link className='nav__settings nav__link' to={option.to}>
                <img src={option.icon} className='nav__icon'/>
                <li className='nav__item'>{option.title}</li>
              </Link>
            )
        }) }
      </div>
    )
  }

  return (
    <div className='sidebar'>
      <nav className='sidebar__nav'>
        <h3>Меню</h3>
        <ul className='nav'>
          {
            arr.map(item => {
              if (item.contain) {
                return (
                  <>
                    <button className='nav__button' type='button' onClick={settingsHandler}>
                      <img src={item.icon} className='nav__icon'/>
                      <li className='nav__item'>{item.title}</li>
                      <img src={IconArrow} className={settings.icon}/>
                    </button>
                    { settings.isActive && <Settings contain={item.contain}/> }
                  </>
                )} return (
                <Link className='nav__link' to={item.to}>
                  <img src={item.icon} className='nav__icon'/>
                  <li className='nav__item'>{item.title}</li>
                  { item.contain && <img src={IconArrow} className='nav__arrow'/> }
                </Link>
              )
            })
          }
        </ul>
      </nav>
    </div>
  )
}
