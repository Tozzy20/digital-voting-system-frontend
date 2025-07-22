import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from "/src/pages/LoginPage.jsx";
import RegisterPage from "/src/pages/RegisterPage.jsx"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App
