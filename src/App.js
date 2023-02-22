import React, { Component } from "react";
// import Counter from "./components/Counter";
// import Dropdown from "./components/Dropdown";
// import ColorPicker from "./components/ColorPicker";
import TodoList from "./components/TodoList";

import initialTodos from "./todos.json";

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "grey", color: "#607D8B" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

class App extends Component {
  state = {
    // todos: [
    //   { id: "id-1", text: "Выучить основы React", completed: true },
    //   {
    //     id: "id-2",
    //     text: "Разобраться с React Router",
    //     completed: false,
    //   },
    //   { id: "id-3", text: "Привыкнуть к Redux", completed: false },
    //   { id: "id-4", text: "Попробовать React Hooks", completed: true },
    // ],
    todos: initialTodos,
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    const totalTodoCount = todos.length;
    // const completedTodos = todos.filter((todo) => todo.completed);
    const completedTodosCount = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );

    return (
      <>
        <h1>Состояние компонента</h1>
        {/* <Counter initialValue={10} /> */}
        {/* <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}

        <p>Общее количество TODO: {totalTodoCount}</p>
        {/* <p>Количество выполненных TODO: {completedTodos.length}</p> */}
        <p>Количество выполненных TODO: {completedTodosCount}</p>

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

// const App = () => (
//   <>
//     <h1>Состояние компонента</h1>
//     {/* <Counter initialValue={10} /> */}
//     {/* <Dropdown /> */}
//     {/* <ColorPicker options={colorPickerOptions} /> */}
//     <TodoList todos={todos}/>
//   </>
// );

export default App;
