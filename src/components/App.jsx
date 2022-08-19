import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// import Counter from './Counter/Counter';
// import Dropdown from './Dropdown/Dropdown';
import Container from './Container/Container';
// import TodoList from './TodosList/TodosList';
// import TodoEditor from './TodoEditor/TodoEditor';
// import Filter from './Filter/Filter';
import initialTodos from './todos.json';
// import Form from './Form/Form';
// import FormLogin from './FormLogin/FormLogin';
import { ProductReviewForm } from './ProductReviewForm/ProductReviewForm';

class App extends Component {
  state = {
    todos: initialTodos, //-------------- data for TODO component//
    filter: '', //-------------- data for TODO component//
  };

  //---------------------------------- data for TODO component//
  addTodo = text => {
    const todo = {
      id: nanoid(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  calculateCompletedTodos = () => {
    const { todos } = this.state;

    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };
  //---------------------------------- data for TODO component//

  //---------------------------------- data for FORM component//
  formSubmitHandler = data => {
    console.log(data);
  };
  //---------------------------------- data for FORM component//

  render() {
    //---------------------------------- data for TODO component//
    // const { todos, filter } = this.state;
    // const totalTodoCount = todos.length;
    // const completedTodoCount = this.calculateCompletedTodos();
    // const visibleTodos = this.getVisibleTodos();
    //---------------------------------- data for TODO component//

    return (
      <Container>
        {/* <Form onSubmit={this.formSubmitHandler} /> */}
        {/* <Counter /> */}
        {/* <Dropdown /> */}
        {/* <FormLogin />, */}
        <ProductReviewForm />
        {/* <div>
          <p>Total Todos: {totalTodoCount}</p>
          <p>Done Todos: {completedTodoCount}</p>
        </div> */}

        {/* <TodoEditor onSubmit={this.addTodo} /> */}
        {/* <Filter value={filter} onChange={this.changeFilter} /> */}
        {/* <TodoList */}
        {/* todos={visibleTodos} */}
        {/* onDeleteTodo={this.deleteTodo} */}
        {/* onToggleCompleted={this.toggleCompleted} */}
        {/* /> */}
      </Container>
    );
  }
}
export default App;
