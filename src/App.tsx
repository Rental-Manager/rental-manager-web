import React from 'react';
import './App.css';
import { Router } from './components/route/Router';

// Arranca la app y miramos que si existe un uusario en sesión (localStorage);
// Si el usuario existe renderizaremos directamente la página de /home
// En caso de que le usuario no exista renderizaremos la landing.

const App = () => {

  const user = {}; //TODO: obtener el usuario en sesión.

  return <Router user={user}/>;
};

export default App;
