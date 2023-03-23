//CHANGE BACKGROUND BASED ON COLOR??
//MAKE THE CSS NICE

import { useState } from "react";
import './App.css';

const COLORS = {
  normal: "EEE6CE",
  fire: "FEA8A8",
  water: "CBE1FF",
  grass: "AFDDB3",
  electric: "FFFBA2",
  ice: "D3FFF8",
  fighting: "D5A3A3",
  poison: "D7CAE9",
  ground: "C1AC88",
  flying: "D4C7E1",
  psychic: "EBAACF",
  bug: "CAE2A2",
  rock: "C6BF93",
  ghost: "CEB6D9",
  dark: "B5A894",
  dragon: "D1B7E8",
  steel: "CACACA",
  fairy: "FFE3E3"
}

function Results(props) {

  function Pokemon({ name, image, height, weight, type }) {

    //credits to geeksforgeeks for their code reference
    function generateCuteness(string) {
      let hash = 0;
      if (string.length === 0) {
        return 0;
      }
      for (let i = 0; i < string.length; i++) {
        let character = string.charCodeAt(i);
        hash = ((hash << 5) - hash) + character;
        hash = hash & hash;
      }
      hash = Math.abs(hash);
      hash = hash.toString();
      return hash.slice(hash.length-2, hash.length-1);
    }


    return (
      <div>
        <br />
        <h1>{name}</h1>
        <img src={image} height="150px" width="auto" alt="Pokemon" />
        <h2>{height}ft, {weight} pounds</h2>
        <h2>main type: {type}</h2>
        <h1>overall cuteness: {generateCuteness(name)}/10</h1>
      </div>
    );
  }

  let data = props.data;
  if (!data) {
    return (
      <h1>choose a pokemon (please)</h1>
    );
  }
  props.setBackground(COLORS[data.types[0].type.name]);
  return (
    <Pokemon 
      name={data.name}
      image={data.sprites.front_default}
      height={data.height}
      weight={data.weight}
      type={data.types[0].type.name}
    />
  );
}

function App() {

  let [pokemon, setPokemon] = useState("");
  let [background, setBackground] = useState("ABCD44");
  let [data, setData] = useState();

  const submit = (e) => {
    e.preventDefault();
    fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    ).then((response) => response.json()
    ).then(setData);
    if (data) {
      setData(data);
    }
    
    setPokemon("");
  }

  return (
    <div className="App" style={{backgroundColor: `#${background}`}}>
      <form onSubmit={submit} >
        <h1>cute pokemon</h1>
        <input 
          type="text"
          placeholder="choose a pokemon"
          value={pokemon}
          onChange={(event) =>
            setPokemon(event.target.value)
          }
        />
        <button>check!</button>
      </form>
      <Results 
        data={data} 
        setBackground={setBackground} 
        background={background}
      />
    </div>
  );
}

export default App;
