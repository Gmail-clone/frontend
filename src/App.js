import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Screens/Login';
import Home from './Screens/Home';
import Signup from './Screens/Signup';
import MailView from './Screens/MailView';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/mailView" element={<MailView/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; // Export the component as the default export

