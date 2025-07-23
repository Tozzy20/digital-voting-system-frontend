import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from "/src/pages/LoginPage.jsx";
import RegisterPage from "/src/pages/RegisterPage.jsx"
import MainPage  from '/src/pages/MainPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/main' element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App
