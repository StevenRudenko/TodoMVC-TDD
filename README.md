This project is inspired by [TodoMVC](https://todomvc.com/examples/react/#/) and used to demo the TDD workflow.

# Test-driven development

## Definition

**Test-driven development** refers to a style of programming in which three activities are tightly interwoven: coding, testing (in the form of writing unit tests) and design (in the form of refactoring).

It can be succinctly described by the following set of rules:

- write a “single” unit test describing an aspect of the program
- run the test, which should **fail** because the program lacks that feature
- write “just enough” code, the **simplest possible**, to make the test **pass**
- “refactor” the code until it conforms to the simplicity criteria
- repeat, “accumulating” unit tests over time

## Expected Benefits

- many teams report significant reductions in defect rates, at the cost of a moderate increase in initial development effort
- the same teams tend to report that these overheads are more than offset by a reduction in effort in projects’ final phases
- although empirical research has so far failed to confirm this, veteran practitioners report that TDD leads to improved design qualities in the code, and more generally a higher degree of “internal” or technical quality, for instance improving the metrics of cohesion and coupling

## Common Pitfalls

Typical individual mistakes include:

- forgetting to run tests frequently
- writing too many tests at once
- writing tests that are too large or coarse-grained
- writing overly trivial tests, for instance omitting assertions
- writing tests for trivial code, for instance accessors

Typical team pitfalls include:

- partial adoption – only a few developers on the team use TDD
- poor maintenance of the test suite – most commonly leading to a test suite with a prohibitively long running time
- abandoned test suite (i.e. seldom or never run) – sometimes as a result of poor maintenance, sometimes as a result of team turnover

# Workshop

## Run & Test

1. Runs the app in the development mode: `npm start`
1. Launches the test runner in the interactive watch mode: `npm test`

> See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

> You can learn more about testing UI at [Tesling Library documentation](https://testing-library.com/docs/).

## Demo

This part covers the application step-by-step implementation using TDD methodology. Every step is a separate commit in a repository with an appropriate tag assigned to it.

### Steps

1. Application initialized (tag `1`)
1. New task input
   1. Red (tag `2.1`)
   1. Green (tag `2.2`)
1. Button to create new task
   1. Red (tag `3.1`)
   1. Green (tag `3.2`)
1. New task is added on plus button press
1. Input text is used for a new task
1. Input text is cleared on new task added
1. Multiple tasks can be added
1. New task should be added to the top
1. Task has a checkbox

## Work in pairs

Requirements to be met by work in pairs doing TDD experiments:

1. Tasks counter should show the number of uncompleted tasks
1. Checkbox should mark task as completed when checked, uncompleted - unchecked
1. There are filters for All / Active / Completed
1. Task can be deleted by X button

### Workshop tests order hint

1. There is a task counter
1. Task counter shows the tasks number
1. Text is strike-through if checkbox is checked
1. Task counter shows the uncompleted tasks number
1. There are filters All / Active / Completed
1. Active filter shows the uncompleted tasks
1. All filter shows all tasks
1. Completed shows the completed tasks
1. Every task has a delete button
1. Click on delete button deletes the task
