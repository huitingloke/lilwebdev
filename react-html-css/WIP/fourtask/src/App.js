import './App.css';
import { useRef, useState } from "react";

const LEVEL = {
  1: "Urgent, Important",
  2: "Urgent, Unimportant",
  3: "Unurgent, Important",
  4: "Unurgent, Unimportant"
}

/*let Storage = {
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
}*/

let CompletedTasks = [
  ["dfs", "description", 1, false],
  ["sfasd", "description", 2, false]
]

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

function Completed(props) {
  return (
    <div className='Containers' id="completedContainer">
      <h1>Completed</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Priority</th>
          <th>Undo?</th>
        </tr>
        {CompletedTasks.map((item) => (
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

function Container(props) {
  return (
    <div className='Containers'>
      <h1>LEVEL</h1>
      <table className="tableManagement">
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Priority</th>
          <th>Done?</th>
        </tr>
        {props.Storage.map((item) => (
          <tr>
            <td>{item[NAME]}</td>
            <td>{item[DESCRIPTION]}</td>
            <td>{item[LEVEL]}</td>
            <td><input type="chec kbox" /></td>
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
        <Container level="1" storage={props.storage} />
        <Container level="2" storage={props.storage} />
      </div>
      <div className="divSeparators">
        <Container level="3" storage={props.storage} />
        <Container level="4" storage={props.storage} />
      </div>
    </div>

  );
}

function Footer() {
  return (
    <footer>Beth's third React App! Welcome to this organized task tracker and enjoy your stay! Special thanks to Justin for hard carrying this project too.</footer>
  );
}

function App() {

  const [Storage, updateStorage] = useState([]);

  const name = useRef();
  const description = useRef();
  const level = useRef();

  const submit = (e) => {
    e.preventDefault();
    let theName = name.current.value;
    let theDescription = description.current.value;
    let theLevel = level.current.value;
    updateStorage(Storage.push({
      NAME: theName, 
      DESCRIPTION: theDescription, 
      LEVEL: theLevel
    }));
    console.log(Storage);
    name.current.value = "";
    description.current.value = "";
  }

  return (
    <div>
      <h1 id="theTitle">The Essential Task Tracker</h1>
      <form id="theForm" onSubmit={submit}>
        <label>Name</label>
        <input
          type="text"
          ref={name}
          placeholder="Enter your task"
        />
        <label>Description</label>
        <input
          type="textarea"
          ref={description}
          placeholder="Enter your task's description"
        />
        <label>Level</label>
        <select ref={level}>
          <option value="1" selected>Urgent, Important</option>
          <option value="2">Urgent, Unimportant</option>
          <option value="3">Not Urgent, Important</option>
          <option value="4">Not Urgent, Unimportant</option>
        </select>
        <br />
        <button>Submit</button>
      </form>
      <ShowTask storage={Storage} />
      <Completed />
      <Footer />
    </div>
  );
}

export default App;
