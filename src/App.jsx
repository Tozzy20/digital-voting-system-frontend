import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import AppContent from './AppContent';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
        <ToastContainer />
      </Router>
    </AuthProvider>
  );
}

export default App;