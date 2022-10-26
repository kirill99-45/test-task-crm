import { Outlet } from 'react-router-dom';
import { Header } from './header/header';
import { Sidebar } from './sidebar/sidebar';

import './layout.scss';

export const Layout: React.FC = () => {

  return (
    <div className='wrapper'>
      <Header />
      <Sidebar />
      <div className='content'>
        <Outlet />
      </div>
    </div>
  )
}
