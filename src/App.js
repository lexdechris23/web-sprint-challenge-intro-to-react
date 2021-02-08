import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import './App.css';
import Character from './components/Character';
import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
    .then((response) => {
      console.log(response);
      setCharacters(response.data.results)
    })
    .catch(error => {
      console.log(error);
    })
  }, [])

 


  return (
    <div className="App">
      <img src='http://www.pngall.com/wp-content/uploads/4/Rick-And-Morty-PNG-File.png'alt='Rick and Morty Logo'/>
      <h1 className="Header">Characters</h1>
      <StyledList>
        {characters.map((character) => (
          <Character key={character.id} character={character} />
        ))}
      </StyledList>
    </div>
  );
}

const StyledList = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: space-between;
flex-wrap: wrap;
`
export default App;

