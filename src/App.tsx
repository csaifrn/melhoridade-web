import React from 'react';
import './styles/global.css';
import './styles/header.css';
import './styles/home.css';
import { Header } from './components/Header';
import { Home } from './components/Home';

const App = (props: any) => {
  return (
    <div className="App container">
      <Header></Header>
      <Home></Home>
    </div>
  )
};

export default App;