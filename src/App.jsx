import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Votes from './pages/VotesPage'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MainPage from './pages/MainPage';
import ProfilePage from './pages/ProfilePage';
import ConstructorPage from './pages/ConstructorPage';
import { AuthProvider } from './context/AuthProvider';




function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path='/' element={<Votes />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/main' element={<MainPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/constructor' element={<ConstructorPage />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App
