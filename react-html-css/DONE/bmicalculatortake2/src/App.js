import './App.css';
import { useState } from "react";

function Form(props) {

  return (
    <form id="mainForm">
      <div className="groupName">
        <label for="weight">Your Weight (in KG) </label>
        <input 
          type="number"
          name="weight" 
          onChange={(event) =>
            props.setWeight(event.target.value)
          }
        />
      </div>
      <br /><br />
      <div className="groupName">
        <label for="height">Your Height (in CM) </label>
        <input 
          type="number"
          name="height"
          onChange={(event) =>
            props.setHeight(event.target.value)
          }
        />
      </div>
    </form>
  );
}

function Result(props) {

  let weightClass;
  if (props.bmi < 18.5) {
    weightClass = "underweight";
  } else if (props.bmi < 25) {
    weightClass = "healthy";
  } else if (props.bmi < 25) {
    weightClass = "overweight";
  } else if (props.bmi < 10000) {
    weightClass = "obese";
  } else {
    weightClass = "required to put in a valid input!";
  }

  return (
    <div>
      <h2>Your BMI is { props.bmi }</h2>
      <h2>You are { weightClass }</h2>
    </div>
  );
}

function App() {

  let [weight, setWeight] = useState(50);
  let [height, setHeight] = useState(160);

  function calculate(weight, height) {
    weight = parseFloat(weight);
    height = parseFloat(height);
    return (weight / ((height / 100) ** 2)).toFixed(1);
  }

  return (
    <div className="App">
      <div className="realApp">
        <h1>Calculate Your BMI!</h1>
        <Form 
          weight={weight} 
          height={height} 
          setWeight={setWeight} 
          setHeight={setHeight}
        />
        <Result bmi={calculate(weight, height)} />
        <footer>First React app developed by Beth!</footer>
      </div>
    </div>
  );
}

export default App;
