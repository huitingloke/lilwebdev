/**
 * Things to do:
 * * Change the data types to objects and implement those
 * * Render the data types into words again under the component (maybe a loop?)
 * * Ask Justin how to make the thing completed (ok asking now see what he says bah)
 * * Justin said give the checkboxes their own useState, I really don't have the patience for this anymore I want to cry
 */

import './App.css';
import { useRef, useState } from "react";

const LEVEL = {
  1: "Urgent, Important",
  2: "Urgent, Unimportant",
  3: "Unurgent, Important",
  4: "Unurgent, Unimportant"
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

function checkedOff() {
  
  let [isChecked, isCheckedUpdateTo] = useState(false);
  
  return (
      <input type="checkbox" checked={isChecked} onClick={isCheckedUpdateTo(!isChecked)} />
  );
}

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
        {props.CompletedTasks.map((item) => (
            <tr>
              <td>{item.NAME}</td>
              <td>{item.DESCRIPTION}</td>
              <td>{item.LEVEL}</td>
              <td><input type="checkbox" /></td>
            </tr>
          ))
        }
        
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
              <td>{item.NAME}</td>
              <td>{item.DESCRIPTION}</td>
              <td>{item.LEVEL}</td>
              <td>
                <checkedOff />
              </td>
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

/**
 * 
 *  {
    NAME: "hehehe",
    DESCRIPTION: "saldkjflaskdf",
    LEVEL: 4,
    DONE: true
  },
  {
    NAME: "asdfaweg",
    DESCRIPTION: "dfg",
    LEVEL: 3,
    DONE: true
  }
 */

function App() {

  const [Storage, updateStorage] = useState([]);
  const [CompletedTasks, updateCompletedTasks] = useState([]);

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
      <Completed CompletedTasks={CompletedTasks} />
      <Footer />
    </div>
  );
}

export default App;
