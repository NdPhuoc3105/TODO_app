import React from "react";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";

class ListTodo extends React.Component {
  state = {
    listTodo: [
      { id: "todo1", title: "Work At Home" },
      { id: "todo2", title: "Watch Tivi" },
      { id: "todo3", title: "play chess" },
    ],
  };

  addNewTodo = (todo) => {
    this.setState({
      listTodo: [...this.state.listTodo, todo],
    });
    toast.success("Success!");
  };

  render() {
    let { listTodo } = this.state;

    return (
      <div className="todo-container">
        <AddTodo addNewTodo={this.addNewTodo} />

        <div className="show-list-todo">
          {listTodo &&
            listTodo.length > 0 &&
            listTodo.map((item, index) => {
              return (
                <div className="list" key={item.id}>
                  <span className="title">
                    {index + 1} - {item.title}
                  </span>
                  <div className="btn">
                    <button className="edit">edit</button>
                    <button className="delete">delete</button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default ListTodo;
