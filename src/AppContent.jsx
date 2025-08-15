import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import ProfilePage from './pages/ProfilePage';
import ConstructorPage from './pages/ConstructorPage';
import Detali0 from './pages/Detali0Page';
import Detali1 from './pages/Detali1Page';
import Detali2 from './pages/Detali2Page';
import Detali3 from './pages/Detali3Page';
import Detali4 from './pages/Detali4Page';
import Detali5 from './pages/Detali5Page';
import Detali6 from './pages/Detali6Page';
import VotesPage from './pages/VotesPage';
import Header from './components/Header';
import HeaderLogin from './components/HeaderLogin';

function AppContent() {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' || location.pathname === '/register' ? <HeaderLogin /> : <Header /> }
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/votes' element={<VotesPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/main' element={<MainPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/constructor' element={<ConstructorPage />} />
        <Route path='/detali0' element={<Detali0 />} />
        <Route path='/votes/:votingId' element={<Detali0 />} />
        <Route path='/detali1' element={<Detali1 />} />
        <Route path='/detali2' element={<Detali2 />} />
        <Route path='/detali3' element={<Detali3 />} />
        <Route path='/detali4' element={<Detali4 />} />
        <Route path='/detali5' element={<Detali5 />} />
        <Route path='/detali6' element={<Detali6 />} />
      </Routes>
    </>
  );
}

export default AppContent;