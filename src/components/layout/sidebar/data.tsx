import { IconHome, IconSearch, IconTables, IconCalendar, IconMap,
  IconDevises, IconSettings, IconSettingsUser, IconFinance, IconLogout, IconArrow
} from './icons/index';

export interface ISidebarItem {
  title : string,
  icon : string,
  to: string,
  selection? : ISidebarItem[]
}

export const sidebar: ISidebarItem[] = [
  {
   title : 'Главная',
   icon : IconHome,
   to: '/',
  },
  {
   title : 'Поиск адресов',
   icon : IconSearch,
   to: '/address',
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
   selection : [
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
