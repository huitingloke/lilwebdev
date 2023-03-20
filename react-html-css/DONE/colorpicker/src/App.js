import './App.css';
import { useState } from "react";

function Header() {
  return (
    <div>
      <h1 style={{ margin: 0 }}>Gradient Background Generator</h1>
      <h3>Which one do you want to change?</h3>
    </div>
  );
}

function UI(props) {

  //Personal Hex Dictionary
  const HEX_DICT = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
  }

  //Random Color Part
  function randomColor() {

    let colorString = "";
    for (let i = 0; i < 6; i++) {
      let chosenNumber = Math.floor(Math.random() * 16);
      colorString += HEX_DICT[chosenNumber];
    }
    return colorString;
    
  }

  return (
    <div id="buttons">
      <div className='colorBoxes'>
        <button onClick={
          () => props.setColor1(`#${randomColor()}`)
        }>First Color</button>
        <h1>{ props.color1 }</h1>
      </div>
      <div className="colorBoxes">
        <button onClick={
          () => props.setColor2(`#${randomColor()}`)
        }>Second Color</button>
        <h1>{ props.color2 }</h1>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <footer>Second React App created by Beth, debugged by Justin (thank you)</footer>
    </div>
  );
}

function App(proppies) {

  let [color1, setColor1] = useState("#FFFFFF");
  let [color2, setColor2] = useState("#000000");

  return (
    <div className="mainApp" style={{ backgroundImage: `linear-gradient(${color1}, ${color2})` }}>
      <div className="frame">
        <Header />
        <UI 
          color1={color1} 
          color2={color2}
          setColor1={setColor1}
          setColor2={setColor2}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
