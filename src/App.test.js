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

test("task generated on plus button click", () => {
  const { plusButton } = setup();
  userEvent.click(plusButton);
  const { tasks } = refresh();
  expect(tasks[0]).toBeInTheDocument();
});
