import React from "react";
import Login from './pages/Login';
import Registro from "./pages/Registro";
import Admin from './pages/admins/Index';
import Index from './pages/Index';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/estilos.css';
import PublicLayout from './layaout/PublicLayout';
import AuthLayout from './layaout/AuthLayout';
import PrivateLayout from './layaout/PrivateLayout';
import Vehiculos from './pages/admins/Vehiculos';
import Clientes from "./pages/admins/Clientes";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={['/admin', '/admins/vehiculos', '/admins/clientes']}>
          <PrivateLayout>
            <Routes>
              <Route path='admins/vehiculos'>
                <Vehiculos/>
              </Route>
              <Route path='admins/clientes'>
                <Clientes/> 
              </Route>
              <Route path='/admin'>
              <Admin/>
              </Route>
          </Routes> 
          </PrivateLayout>
        </Route>
        <Route path={['/login', '/registro']}>
          <AuthLayout>
            <Routes>
              <Route path='/login' >
                <Login/>
              </Route>
              <Route path='/registro'>
                <Registro/>
              </Route>
          </Routes>
          </AuthLayout>
        </Route>
        <Route path='/'>
          <PublicLayout>
            <Routes>
              <Route path='/'>
              <Index/>
              </Route>
            </Routes>
          </PublicLayout>
        </Route>
      </Routes>
    </BrowserRouter>   
  );
}

export default App;
