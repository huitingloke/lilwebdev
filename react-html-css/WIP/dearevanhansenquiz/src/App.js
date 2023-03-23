import { useState } from 'react';
import './App.css';

const MAX_SCORE = 5;

const QUESTION = {
  1: "What is Evan's real first name?",
  2: "How many songs are in the OBC recording?",
  3: "Which song did 'You Will Be Found' replace?",
  4: "Who starred as Zoe Murphy in the first ever reading?",
  5: "Which Tony award did the musical NOT win?"
}

const ANSWERS = {
  1: ["Joe", "Larry", "John", "Mark"],
  2: ["10", "14", "16", "12"],
  3: [
    "Part Of Me", 
    "Hiding In Your Hands", 
    "This'll Be The Year", 
    "Goin' Viral"
  ],
  4: [
    "Lucy Anderson", 
    "Claire Rankin", 
    "Laura Dreyfuss", 
    "Barrett Wilbert Weed"
  ],
  5: [
    "Best Orchestrations", 
    "Best Musical", 
    "Best Direction Of A Musical", 
    "Best Book of a Musical"
  ]
}

const CORRECT_ANSWER = {
  1: "Mark",
  2: "14",
  3: "Part Of Me",
  4: "Barrett Wilbert Weed",
  5: "Best Direction Of A Musical"
}

function Header() {
  return (
    <div>
      <h1>Dear Evan Hansen Quiz!</h1>
      <p><i>How well do you know this beloved musical?</i></p>
    </div>
  );
}

function QuestionTitle(props) {
  return (
    <div>

    </div>
  );
}

function Option(props) {
  return (
    <div>
      
    </div>
  );
}

function Question(props) {
  return (
    <div>
      
    </div>
  );
}

function QuestionList(props) {
  let questions = props.questions;
  //USE .MAP USE .MAP OK USE .MAP ASDFLAKDFLSJAKLJFSDFJDKLA
  questions.map(
    (question) => {
      <Question />
    }
  )
}

function Results(props) {
  const RANK = {
    0: "Broken Arm",
    1: "Writing Letters To Yourself",
    2: "Baseball Glove",
    3: "Therapist",
    4: "'Smoking... Crack?'",
    5: "Tree Master"
  }

  return (
    <div>
      <h1>Your final score: {props.score}/5</h1>
      <h2>Rank: {RANK[props.score]}</h2>
    </div>

  );
}

function App() {

  let [score, updateScore] = useState(0);
  let [answers, updateAnswers] = useState([])

  return (
    <div className="App">
      <Header />
      <QuestionList
        questions={QUESTION}
        score={score}
      />
      <Results 
        score={score}
      />
    </div>
  );
}

export default App;
