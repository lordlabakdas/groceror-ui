import React from 'react';
import './App.css';
import Login from './login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inventory from './inventory/Inventory'; // Import your Inventory component

function App() {

return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/inventory" element={<Inventory />} />
    </Routes>
  </BrowserRouter>
);
}
export default App;