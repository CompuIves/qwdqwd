import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>you are hacked</h1>
      <h2>apwodkadawde some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById(
  "root"
);
ReactDOM.render(<App />, rootElement);
