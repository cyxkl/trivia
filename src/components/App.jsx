import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  let currentQuestionNumber = 0;
  return (
    <div className="app">
      Trivia!
      <Question text={data[0]["question"]["text"]} />
      <Answer answer={"answer goes here"} />
      <NextQuestion />
    </div>
  );
}

export default App;

function Question(props) {
  return (
    <div>
      <p>{props.text}</p>
    </div>
  );
}

function NextQuestion() {
  return (
    <div>
      <button>Next Question</button>
    </div>
  );
}

function Answer(props) {
  return (
    <div>
      <p>{props.answer}</p>
    </div>
  );
}
