import './App.css';
import { useRef } from "react";

const LEVEL = {
  1: "Urgent, Important",
  2: "Urgent, Unimportant",
  3: "Unurgent, Important",
  4: "Unurgent, Unimportant"
}

let Storage = {
  1: [],
  2: [],
  3: [],
  4: []
}

/**
 * var Task = {
 *  ID: 0,
 *  Name: "task",
 *  Description: "put description here"
 *  Level: 1-4,
 *  Done: false
 * }
 * 
 * alternatively
 * 
 * var Task = [0, "task", "description", 1-4, false]
 */

function Task(props) {
  return (
    <h1>sdafljkljkdfsa</h1>
  );
}

function Container() {
  return (
    <h1>well</h1>
  );
}

function ShowTask(props) {
  return (
    <h1>HELP LAH</h1>
  );
}

function App() { //do form logic inside here hehe

  let name = useRef();
  let description = useRef();
  let level = useRef();

  const submit = (e) => {
    e.preventDefault();

  }

  return (
    <div>
      <form>
        <label>Name</label>
        <input
          type="text"
          value={name}
        />
        <label>Description</label>
        <input
          type="text"
          value={description}
        />
        <label>Level</label>
        <input
          type="number"
          max="4"
          min="1"
        />

      </form>
      <ShowTask />
      <Container />
      <Task />
    </div>
  );
}

export default App;
