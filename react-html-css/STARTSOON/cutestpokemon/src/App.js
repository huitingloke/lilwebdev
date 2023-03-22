import { useState } from "react";
import './App.css';

function Results(props) {

  function Pokemon({ name, image, height, weight }) {

    /*function generateCuteness() {
      STILL NEED TO IMMPLEMENT THE CUTENEESS PLEASE
    }*/

    return (
      <div>
        <br />
        <h1>{name}</h1>
        <img src={image} height="150px" width="auto" alt="Pokemon" />
        <h2>{height}ft, {weight} pounds</h2>
        <h1>overall cuteness: 34534</h1>
      </div>
    );
  }

  let data = props.data;
  if (!data) {
    return (
      <h1>choose a pokemon (please)</h1>
    );
  }

  return (
    <Pokemon 
      name={data.name}
      image={data.sprites.front_default}
      height={data.height}
      weight={data.weight}
    />
  );
}

function App() {

  let [pokemon, setPokemon] = useState("");
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
    <div className="App">
      <form onSubmit={submit}>
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
      <Results data={data} />
    </div>
  );
}

export default App;
