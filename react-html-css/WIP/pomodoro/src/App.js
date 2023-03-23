import './App.css';
import { useState, useEffect } from "react";
import watermelon from "./Watermelon_Fox.png";

function Timer(props) {
  return (
    <h1>ehe!! ur time lefttt!!1 <br />{(props.time / 60000).toFixed(2)}</h1>
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

  useEffect(() => { //https://dev.to/yuridevat/how-to-create-a-timer-with-react-7b9 reference
    const interval = setInterval(() => getTime(deadline), 1000);
    return () => clearInterval(interval);
  })

  return (
    <div className="mainApp">
      <img src={watermelon} alt="cutiepie" className="rotate" />
      <h1>pomodOWO appwicashun uwu</h1>
      <p>henlo!!1 omo do u wanna study? uWU!!!</p>
      <div id="buttonGroup">
        <button onClick={
          () => {
            let startTime = new Date();
            let endTime = new Date(+pomoTime);
          }
        }>start!! study!!</button>
        <button>pauss!!1</button>
        <button onClick={
          () => {
            setTimer(pomoTime);
            console.log(timer);
          }
        }>restawt!!!</button>
      </div>
      <Footer />
      <Timer time={timer} />
    </div>
  );
}

export default App;
