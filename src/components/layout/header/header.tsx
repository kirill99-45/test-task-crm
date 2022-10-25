import IconLogo from './logo.svg';
import IconUser from './user.svg';
import './header.scss';

export const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='header__logo logo'>
        <img src={IconLogo} className='logo__img' alt='Наш логотип' />
        <h3 className='logo__title'>Wrench CRM</h3>
      </div>
      <div className='header__user user'>
        <img src={IconUser} className='user__icon' alt='Иконка пользователя' />
        <h4 className='user__title'>Имя Фамилия</h4>
      </div>
    </header>
  )
}
