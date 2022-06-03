import './App.css';
import React from 'react';
import { Account } from './components/Account';
import { Admin } from './accounts/Admin';

const App = () => {
  return (
    <>
      <Account />
      <Admin />
    </>
  )
}

export default App;