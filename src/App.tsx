import React from 'react';
import './App.css';
import ListOfWords from "./ListOfWords";

function App() {
    const data = [
        {keyValue: 0, value: "test1"},
        {keyValue: 1, value: "test2"}
    ];
  return (
    <div className="App">
      <ListOfWords items={data} />
    </div>
  );
}

export default App;
