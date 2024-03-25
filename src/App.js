import React from "react";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1> LEARNABLE INTERN DATA SHEET</h1>
      <Intern
        img="https://variety.com/wp-content/uploads/2023/03/John-Wick-3.jpg?w=1000&h=562&crop=1&resize=681%2C383"
        name="john wick"
        path="frontend path"
        score="task score: 20"
        attendance="Attendance: 90%"
      />

      <Intern
        img="image/elon.png"
        name="Elon musk "
        path="Web3 path"
        score="task score: 35"
        attendance="Attendance: 50%"
      />

      <Intern
        img="image/rona.png"
        name="Cristiano Romaldo"
        path="Backend path"
        score="task score: 75"
        attendance="task attendance: 99%"
      />

      <Intern
        img="image/nnaji.png"
        name="Genevieve Nnaji"
        path="production design"
        score="task score: 40"
        attendance="Attendance: 65%"
      />
      <Intern
        img="image/ejiofor.png"
        name="Chiwetel Ejiofor"
        path="Backend path"
        score="task score: 85"
        attendance="Attendance: 80%"
      />
    </div>
  );
}

function Intern(props) {
  return (
    <div className="intern">
      <img src={props.img} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.path}</p>
      <p>{props.score}</p>
      <p>{props.attendance}</p>
    </div>
  );
}

export default App;
