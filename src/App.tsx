import './App.css';
import { Routes, Route } from 'react-router-dom';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/ >}>
        <Route index element={<Home />} />
        <Route path='address' element={<Adsress/>} />
      </Route>
    </Routes>
  )
}
