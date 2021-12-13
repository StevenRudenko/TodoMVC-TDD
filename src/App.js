import "./App.css";

function App() {
  return (
    <div className="App">
      <input data-testid="task-input" />
      <button data-testid="plus-button">+</button>
      <div data-testid="task">New Task</div>
    </div>
  );
}

export default App;
