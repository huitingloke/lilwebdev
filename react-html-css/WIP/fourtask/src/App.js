import './App.css';
import { useRef, useState } from "react";

const LEVEL = {
  1: "Urgent, Important",
  2: "Urgent, Unimportant",
  3: "Unurgent, Important",
  4: "Unurgent, Unimportant"
}

function CheckedOff(props) {
  return (
      <input type="checkbox" checked={false} onClick={() => props.handleClick()} />
  );
}

function Completed(props) {
  return (
    <div className='Containers' id="completedContainer">
      <h1>Completed</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {props.CompletedTasks.map((item) => (
              <tr>
                <td>{item.NAME}</td>
                <td>{item.DESCRIPTION}</td>
                <td>{item.LEVEL}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

function Container(props) {

  //takes index, generates a new function that only runs with index...? saves index? idk anymore bro
  //hyper specific instance of set complete
  const generateHandler = (index) => () => props.setComplete(index);

  return (
    <div className='Containers'>
      <h1>{LEVEL[props.level]}</h1>
      <table className="tableManagement">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Done?</th>
          </tr>
        </thead>
        <tbody>
          {props.storage.map((item) => (
            <tr>
              <td>{item.NAME}</td>
              <td>{item.DESCRIPTION}</td>
              <td>{item.LEVEL}</td>
              <td>
                <CheckedOff 
                  handleClick={generateHandler(item.INDEX)} //put handler to not require passing down index as well
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function ShowTask(props) {
  return (
    <div>
      <div className="divSeparators">
        <Container setComplete={props.setComplete} level="1" storage={props.storage.filter(e => e.LEVEL === 1)} />
        <Container setComplete={props.setComplete} level="2" storage={props.storage.filter(e => e.LEVEL === 2)} />
      </div>
      <div className="divSeparators">
        <Container setComplete={props.setComplete} level="3" storage={props.storage.filter(e => e.LEVEL === 3)} />
        <Container setComplete={props.setComplete} level="4" storage={props.storage.filter(e => e.LEVEL === 4)} />
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

  const [storage, setStorage] = useState([]); //second function overwrites, not adds :P

  const name = useRef();
  const description = useRef();
  const level = useRef();

  function setComplete(index) {
    setStorage(storage.map((e, i) => i === index ? {...e, DONE: true} : e)); 
    //... desctructured e and ignored everything else except for DONE
  }

  const submit = (e) => {
    e.preventDefault();
    setStorage(
      [...storage, {
        NAME: name.current.value, 
        DESCRIPTION: description.current.value, 
        LEVEL: parseInt(level.current.value),
        DONE: false
      }] //unpack all items, put into first part, then add one more item to the end of it
    );
    console.log(storage);
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
      <ShowTask 
        setComplete={setComplete}
        storage={storage.map((e, i) => ({...e, INDEX: i})).filter(e => !e.DONE)} 
      />
      <Completed CompletedTasks={storage.filter(e => e.DONE)} />
      <Footer />
    </div>
  );
}

export default App;
