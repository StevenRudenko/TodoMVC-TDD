import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (text) {
      setTasks([text, ...tasks]);
      setText("");
    }
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
      {tasks.map((task, i) => (
        <div key={`task-${i}`} data-testid="task">
          {task}
        </div>
      ))}
    </div>
  );
}

export default App;
