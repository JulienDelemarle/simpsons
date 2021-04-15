import React from "react";
import axios from 'axios';
import { useState } from "react";
import QuoteCard from './components/QuoteCard';
import './App.css';

function App() {
 
  const [character, SetCharacter] =useState("");
  const getCharacter=() => { 
    axios.get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then((response) => response.data)
    .then((data) => {
      
    SetCharacter(data[0]);

  });

};
  
  
  return (
    <div className="App">
      <header className="App-header">
       <QuoteCard character={character}/>
       <button type="button" onClick={getCharacter}>Get simpson</button> 
      </header>
    </div>
  );
}

export default App;
