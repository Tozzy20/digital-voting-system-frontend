import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import ProfilePage from './pages/ProfilePage';
import ConstructorPage from './pages/ConstructorPage';
import Detali0 from './pages/Detali0Page';
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
      </Routes>
    </>
  );
}

export default AppContent;