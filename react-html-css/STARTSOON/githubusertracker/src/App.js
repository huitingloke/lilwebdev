import {useState, useEffect} from "react";
import "./App.css";

function Header() {
  return (
    <h1>Can I hire them?</h1>
  );
}

function Footer() {
  return (
    <footer>Created by Beth using the Github User API. It's so cute!</footer>
  );
}

function Results() {
  return (
    <h1>lskdjfljksdf</h1>
  );
}

export function App() {

  let [username, setUsername] = useState("");
  let [data, setData] = useState(null);

  function GithubUser({ name, location, hireable, bio }) {
    if (name == null && location == null) {
      return (
        <h1 id="errorNoUser">The user you have searched for is unavailable!</h1>
      );
    }
    else if (hireable == null && name != null) {
      hireable = "Not looking for work";
    }
    return (
      <div>
        <h1>{name}</h1>
        <h2>{location}</h2>
        <h2><i>{hireable}</i></h2>
        <p>{bio}</p>
      </div>
    );
  }
  
  const submit = (e) => {
    fetch(
      `https://api.github.com/users/${username}`
    ).then((response) => response.json()
    ).then(setData);
    if (data) return (
      <GithubUser 
        name={data.name} 
        location={data.location} 
        hireable={data.hireable} 
        bio={data.bio}
      />
    )
  }

  return (
    <div className="mainApp">
      <Header />
      <form onSubmit={submit}>
        <input 
          type="text"
          onChange={(event) => {
            setUsername(event.target.value);
          } }
          placeholder="Enter a name!"
          value={username}
        />
        <button>Check 'em out</button>
      </form>
      <Results />
      <Footer />
    </div>
  );
}