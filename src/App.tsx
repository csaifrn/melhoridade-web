import React from 'react';
import './styles/global.css';
import './styles/header.css';
import './styles/home.css';
import { Header } from './components/Header';
import { Main } from './components/Main';

const App = (props: any) => {
  return (
    <div className="App container">
      <Header></Header>
      <Main></Main>
    </div>
  )
};

export default App;