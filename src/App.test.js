import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

const setup = () => {
  const utils = render(<App />);
  const input = screen.queryByTestId("task-input");
  const plusButton = screen.queryByTestId("plus-button");
  return {
    input,
    plusButton,
    ...utils,
  };
};

const refresh = () => {
  const tasks = screen.queryAllByTestId("task");
  return {
    tasks,
  };
};

test("render task input", () => {
  const { input } = setup();
  expect(input).toBeInTheDocument();
});

test("render plus button", () => {
  const { plusButton } = setup();
  expect(plusButton).toBeInTheDocument();
});

test("task text generated is valid", () => {
  const taskText = "new tasks";
  const { input, plusButton } = setup();
  userEvent.type(input, taskText);
  userEvent.click(plusButton);
  const { tasks } = refresh();
  expect(tasks[0].textContent).toBe(taskText);
});

test("input should be cleared after new task added", () => {
  const { input, plusButton } = setup();
  userEvent.type(input, "new task");
  userEvent.click(plusButton);
  expect(input.value).toBe("");
});

test("multiple tasks can be added", () => {
  const { input, plusButton } = setup();
  userEvent.type(input, "new task");
  userEvent.click(plusButton);
  userEvent.type(input, "new task");
  userEvent.click(plusButton);
  const { tasks } = refresh();
  expect(tasks.length).toBe(2);
});
