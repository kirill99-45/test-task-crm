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

export const Sidebar: React.FC = () => {

  const arr = [
    {
     title : 'Главная',
     icon : IconHome,
    },
    {
     title : 'Поиск адресов',
     icon : IconSearch,
    },
    {
     title : 'Таблицы',
     icon : IconTables,
    },
    {
     title : 'Календарь',
     icon : IconCalendar,
    },
    {
     title : 'Карты',
     icon : IconMap,
    },
    {
     title : 'Виджеты',
     icon : IconDevises,
    },
    {
     title : 'Настройки',
     icon : IconSettings,
     contain : [
       {
         title : 'Настройки профиля',
         icon : IconSettingsUser,
       },
       {
         title : 'Управление финансами',
         icon : IconFinance,
       },
     ]
    },
    {
     title : 'Выход',
     icon : IconLogout,
    },
  ]



  return (
    <div className='sidebar'>
      <nav className='sidebar__nav'>
        <h3>Меню</h3>
        <ul className='nav'>
        </ul>
      </nav>
    </div>
  )
}
