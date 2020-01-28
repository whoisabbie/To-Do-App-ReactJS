import React from 'react';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';

class App extends React.Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'hello world',
        time: new Date().toLocaleString(),
        isCompleted: false
      },
      {
        id: 2,
        title: 'hello owlrd length',
        time: new Date().toLocaleString(),
        isCompleted: true
      },
      {
        id: 3,
        title: 'longer lenth lkadsflkhjadfsklj',
        time: new Date().toLocaleString(),
        isCompleted: false
      }
    ]
  }

  //To-Do-Completed event or not
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      })
    });
  }

  //Delete To-Do Item
  deleteTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  //addTodo - adding Todo
  addTodo = (title) => {
    if (this.state.todos.length === 0) {
      const addNewTodo = {
        id: 1,
        title: title,
        isCompleted: false
      }
      this.setState({ todos: [...this.state.todos, addNewTodo] });
    }
    else {
      const addNewTodo = {
        id: this.state.todos[this.state.todos.length - 1].id + 1,
        title: title,
        isCompleted: false
      }
      this.setState({ todos: [...this.state.todos, addNewTodo] });
    }
  }

  render() {
    return (
      <div >
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todo
          todos={this.state.todos}
          markComplete={this.markComplete}
          deleteTodo={this.deleteTodo}
        />
      </div >
    );
  }
}

export default App;
