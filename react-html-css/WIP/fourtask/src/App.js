import './App.css';
import { useRef } from "react";

const LEVEL = {
  1: "Urgent, Important",
  2: "Urgent, Unimportant",
  3: "Unurgent, Important",
  4: "Unurgent, Unimportant"
}

let Storage = {
  1: [
    ["whee", "sdfkjhaskdjfkajsdfkasdfjasldflasdjflkasdjflk", 1, false],
    ["hi", "description", 1, false],
    ["nerd", "description", 1, false]
  ],
  2: [
    ["dfs", "description", 2, false],
    ["sfasd", "description", 2, false],
    ["sadf", "description", 2, false]
  ],
  3: [
    ["sadffasd", "description", 3, false],
    ["sdf", "description", 3, false],
    ["asdfsd", "description", 3, false]
  ],
  4: [
    ["whee", "description", 4, false],
    ["hi", "description", 4, false],
  ]
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
    <h1>somebody is having a mental breakdown and it is me</h1>
  );
}

function Completed(props) {
  return (
    <div>
      <h1>Completed</h1>
      <table>

      </table>
    </div>
  );
}

function Container(props) {
  return (
    <div className='Containers'>
      <h1>{LEVEL[props.level]}</h1>
      <table className="tableManagement">
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Priority</th>
          <th>Done?</th>
        </tr>
        {Storage[props.level].map((item) => (
          <tr>
            <td>{item[0]}</td>
            <td>{item[1]}</td>
            <td>{item[2]}</td>
            <td><input type="checkbox" /></td>
          </tr>
        ))}
      </table>
    </div>
  );
}

function ShowTask(props) {
  return (
    <div>
      <div className="divSeparators">
        <Container level="1" />
        <Container level="2" />
      </div>
      <div className="divSeparators">
        <Container level="3" />
        <Container level="4" />
      </div>
    </div>

  );
}

function App() { //do form logic inside here hehe

  let name = useRef();
  let description = useRef();
  let level = useRef();

  const submit = (e) => {
    e.preventDefault();
    level = level.toNumber();
    Storage[level].push([name, description, level, false]);
    level = "1";
  }

  return (
    <div>
      <h1 id="title">The Essential Task Tracker</h1>
      <form id="theForm">
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
        <input type="submit" />
      </form>
      <ShowTask />
      <Completed />
    </div>
  );
}

export default App;
