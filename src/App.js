import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [task, setTask] = useState();

  const addTask = () => {
    setTask(text);
    setText("");
  };

  return (
    <div className="App">
      <input
        data-testid="task-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button data-testid="plus-button" onClick={addTask}>
        +
      </button>
      {task && <div data-testid="task">{task}</div>}
    </div>
  );
}

export default App;
