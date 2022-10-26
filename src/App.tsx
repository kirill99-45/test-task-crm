import { Routes, Route } from 'react-router-dom';
import { Home } from './components/pages/home/home-page';
import { Addresses } from './components/pages/addresses/addresses-page';
import { Layout } from './components/layout/layout';

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
