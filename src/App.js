import React, { Component, Fragment } from "react";
import HeaderComponents from "./Components/HeaderComponent/HeaderComponent";
import TodoInput from "./Components/ToDoComponent/TodoInput";
import TodoList from "./Components/ToDoComponent/TodoList";
import { v4 as uuid4 } from "uuid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      id: uuid4(),
      item: "",
      editTodo: false
    };
  }

  //form handlechange
  handleChange = (e) => {
    this.setState({ item: e.target.value });
  };

  // from handleSubmit
  handleSubmit = (e) => {
    e.preventDefault();
    let newItem = {
      id: this.state.id,
      item: this.state.item
    };
    //update state and add values to Items Array
    this.setState({
      items: [...this.state.items, newItem],
      id: uuid4(),
      item: "",
      editTodo: false
    });
  };
  //handle delete functionality
  deleteTodo = (id) => {
    let filterContent = this.state.items.filter((item) => item.id !== id);
    console.log(filterContent);
    this.setState({ items: filterContent });
  };
  //handle edit functionality

  editTodo = (id) => {
    let editContent = this.state.items.filter((item) => item.id !== id);
    let selectedItem = this.state.items.find((item) => item.id === id);
    this.setState({
      items: editContent,
      item: selectedItem.item,
      id: id,
      editTodo: true
    });
  };

  render() {
    console.log(this.state.items);
    return (
      <Fragment>
        <header id="headerBlock">
          <HeaderComponents />
        </header>
        <main className="container">
          <TodoInput
            item={this.state.item}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            editTodo={this.state.editTodo}
          />
          <TodoList
            items={this.state.items}
            handleDelete={this.deleteTodo}
            handleEdit={this.editTodo}
          />
        </main>
        <hr className="hr my-2" />
        <footer className="container">
          <p>I am footer text</p>
        </footer>
      </Fragment>
    );
  }
}

export default App;
