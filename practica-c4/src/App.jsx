import React from "react";
import Login from './pages/Login';
import Registro from "./pages/Registro";
import Admin from './pages/Admin';
import Index from './pages/Index';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/estilos.css';
import PublicLayout from "./layaout/PublicLayout";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='registro' element={<Registro/>} />
        <Route path='admin' element={<Admin/>} />
        <PublicLayout>
        <Route path='/' element={<Index />} />
        </PublicLayout>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
