import React from "react";
import Login from './pages/Login';
import Registro from "./pages/Registro";
import Admin from './pages/Admin';
import Index from './pages/Index';
import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Router>
        <Route path= '/login'>
          <Login/>
        </Route>
        <Route path='/registro'>
          <Registro/>
        </Route>
        <Route path='/admin'>
          <Admin/>
        </Route>
        <Route path='/'>
          <Index/>
        </Route>
      </Router>
 </Router>
  );
}

export default App;
