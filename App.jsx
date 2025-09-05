import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function save(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addData() {
    setItems((previous) => {
      return [...previous, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={save} value={inputText} />
        <button onClick={addData}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoitem) => (
            <li> {todoitem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
