import './App.css';
import { useState } from "react";

function Timer(props) {
  return (
    <h1>ehe!! ur time lefttt!!1 {props.time}</h1>
  );
}

function Footer() {
  return (
    <footer>woww!! such big cool pwoject??? omo im so pwouddd ahhh</footer>
  );
}

function App() {
  
  let pomoTime = 1500000, breakTime = 300000, totalTime = pomoTime + breakTime;
  let [timer, setTimer] = useState(pomoTime);

  return (
    <div className="mainApp">
      <img src="https://www.kindpng.com/picc/m/236-2362818_anime-sempai-animegirl-heart-kawaii-cute-anime-girl.png" alt="cutiepie" />
      <div>
        <h1>pomodOWO appwicashun uwu</h1>
        <p>henlo!!1 omo do u wanna study? uWU!!!</p>
        <div id="buttonGroup">
          <button onClick={
            () => {
              
            }
          }>start!! study!!</button>
          <button>pauss!!1</button>
          <button onClick={
            () => {
              setTimer(pomoTime);
            }
          }>restawt!!!</button>
        </div>
        <Footer />
      </div>
      <Timer time="placeholder" />
    </div>
  );
}

export default App;
