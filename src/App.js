import React, { Component } from 'react'
import './App.css';
import Title from './components/title/title.tsx';
import Button from './components/button/button.tsx';
// import Button from './components/button/button'

const App = () => {
  return (
    <div className="App">
      <div className="App__wrapper">
        <Title text={"Just button. Tap"} />
        <Button text={"Я кнопочка. Тык"} isFill={true} />
      </div>
    </div>
  );
}

export default App;
