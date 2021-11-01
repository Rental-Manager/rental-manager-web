import React from 'react';
import './App.css';
import { Router } from './components/route/Router';
import { ContextProvider } from './context/ContextProvider';

const App = () => {

  return <ContextProvider>
    <Router/>
  </ContextProvider>;
};

export default App;
