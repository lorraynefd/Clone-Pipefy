import React from 'react';
import GlobalStyle from './styles/global';
import Header from './components/header';
import Board from './components/Board';
function App() {
  return (
    <>
      <Header/>
      <Board/>
      <GlobalStyle/>
    </>
  );
}

export default App;
