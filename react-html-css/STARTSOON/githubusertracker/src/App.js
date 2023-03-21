import {useState, useEffect} from "react";

function Header() {
  return (
    <h1>Find A Github User</h1>
  );
}

function Footer() {
  return (
    <footer>Created by Beth using the Github User API. It's so cute!</footer>
  );
}

export function UserFound() {
  return (
    <>
      <h1>Test test userFound</h1>
    </>
  );
}

export function UserNotFound() {
  return (
    <>
      <h1>Sorry, the user you have searched for was not found!</h1>
      <a>Return to Home</a>
    </>
  );
}

export function App() {

  let [username, setUsername] = useState();
  let [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.github.com/users/${username}`
    ).then((response) => response.json()
    ).then(setData)
  }, []); 

  const submit = (e) => {
    try {
      pass
    } catch {

    }
  }


  return (
    <div>
      <Header />
      <form onSubmit={submit}>
        <input 
          type="text"
          value={username}
          placeholder="Enter a name!"
        />
        <button>Check 'em out</button>
      </form>
      <Footer />
    </div>
  );
}