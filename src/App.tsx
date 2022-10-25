import { Routes, Route } from 'react-router-dom';
import { Home } from './components/pages/home/home-page.tsx';
import { Addresses } from './components/pages/addresses/addresses-page.tsx';
import { Layout } from './components/layout/layout.tsx';
import './App.css';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/ >}>
        <Route index element={<Home />} />
        <Route path='address' element={<Addresses/>} />
      </Route>
    </Routes>
  )
}
