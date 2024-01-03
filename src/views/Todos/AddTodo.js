import React from "react";
import { toast } from "react-toastify";

class AddTodo extends React.Component {
  state = {
    title: "",
  };

  handleOnChangeTodo = (event) => {
    this.setState({
      title: event.target.value,
    });
  };

  handleAddTodo = () => {
    if (!this.state.title) {
      toast.error("missing params");
      return;
    }

    let todo = {
      id: Math.floor(Math.random() * 1001),
      title: this.state.title,
    };

    this.props.addNewTodo(todo);

    this.setState({
      title: "",
    });
  };

  render() {
    let { title } = this.state;

    return (
      <div className="add-todo">
        <input
          type="Text"
          value={title}
          onChange={(event) => this.handleOnChangeTodo(event)}
        />

        <button className="add" onClick={() => this.handleAddTodo()}>
          Add
        </button>
      </div>
    );
  }
}

export default AddTodo;
