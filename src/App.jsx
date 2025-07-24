import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from "/src/pages/LoginPage.jsx";
import RegisterPage from "/src/pages/RegisterPage.jsx"
import MainPage from '/src/pages/MainPage.jsx';
import Sidebar from '/src/components/office/Sidebar';
import MyOfficePage from './pages/MyOfficePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/office' element={<MyOfficePage />} />
      </Routes>
    </Router>
  );
}

export default App
