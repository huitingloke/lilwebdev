import {useState} from "react";
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

function Results(props) {

  function GithubUser({ name, location, hireable, bio }) {
    if (name == null && location == null) {
      return (
        <>
          <br />
          <h1 id="errorNoUser">The user you have searched for is unavailable!</h1>
        </>
      );
    }
    else if (hireable == null && name != null) {
      hireable = "Not right now...";
    }
    else {
      hireable = "Yes I am!";
    }
    return (
      <div>
        <br />
        <h1>{name}</h1>
        <p><i>{bio}</i></p>
        <h3>Location: {location}</h3>
        <h3>Looking for work? <i>{hireable}</i></h3>
      </div>
    );
  }

  return (
    <GithubUser 
    name={props.data.name} 
    location={props.data.location} 
    hireable={props.data.hireable} 
    bio={props.data.bio}
  />
  );

}

export function App() {

  let [username, setUsername] = useState("");
  let [data, setData] = useState("");
  
  const submit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.github.com/users/${username}`
    ).then((response) => response.json()
    ).then(setData);
    if (data) {
      setData(data);
    }
    setUsername("");
  }

  return (
    <div className="mainApp">
      <div className="widget" >
        <Header />
        <form onSubmit={submit}>
          <input 
            type="text"
            onChange={(event) => {
              setUsername(event.target.value);
            } }
            placeholder="Github username"
            value={username}
          />
          <button>Check 'em out</button>
        </form>
        <Results data={data} className="resultsClass" />
        <Footer />
      </div>
    </div>
  );
}