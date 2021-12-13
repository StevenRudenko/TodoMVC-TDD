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

test("render task input", () => {
  const { input } = setup();
  expect(input).toBeInTheDocument();
});

test("render plus button", () => {
  const { plusButton } = setup();
  expect(plusButton).toBeInTheDocument();
});
