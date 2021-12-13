import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <input
        data-testid="task-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button data-testid="plus-button">+</button>
      {text && <div data-testid="task">{text}</div>}
    </div>
  );
}

export default App;
