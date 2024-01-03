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
    editTodo: {},
  };

  addNewTodo = (todo) => {
    this.setState({
      listTodo: [...this.state.listTodo, todo],
    });
    toast.success("Success!");
  };

  handleEditTodo = (todo) => {
    let { editTodo, listTodo } = this.state;

    let isEmptyObj = Object.keys(editTodo).length === 0;

    if (isEmptyObj === false && editTodo.id === todo.id) {
      let listTodoCopy = [...listTodo];

      //Find index of specific object using findIndex method.
      let objIndex = listTodoCopy.findIndex((item) => item.id === todo.id);

      listTodoCopy[objIndex].title = editTodo.title;

      // Set state
      this.setState({
        listTodo: listTodoCopy,
        editTodo: {},
      });

      toast.success("Update Succeed!");
      return;
    }

    this.setState({
      editTodo: todo,
    });
  };

  handleDeleteTodo = (todo) => {
    let currentsTodo = this.state.listTodo;
    currentsTodo = currentsTodo.filter((item) => item.id !== todo.id);
    this.setState({
      listTodo: currentsTodo,
    });
    toast.info("Delete Item Succeed");
  };

  handleOnChangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };

  render() {
    let { listTodo, editTodo } = this.state;

    let isEmptyObj = Object.keys(editTodo).length === 0;
    console.log(">> Check empty Object:", isEmptyObj);

    return (
      <div className="todo-container">
        <AddTodo addNewTodo={this.addNewTodo} />

        <div className="show-list-todo">
          {listTodo &&
            listTodo.length > 0 &&
            listTodo.map((item, index) => {
              return (
                <div className="list" key={item.id}>
                  {isEmptyObj === true ? (
                    <span className="title">
                      {index + 1} - {item.title}
                    </span>
                  ) : (
                    <>
                      {editTodo.id === item.id ? (
                        <span>
                          {index + 1} -{" "}
                          <input
                            value={editTodo.title}
                            onChange={(event) =>
                              this.handleOnChangeEditTodo(event)
                            }
                          />
                        </span>
                      ) : (
                        <span className="title">
                          {index + 1} - {item.title}
                        </span>
                      )}
                    </>
                  )}

                  <div className="btn">
                    <button
                      className="edit"
                      onClick={() => this.handleEditTodo(item)}
                    >
                      {isEmptyObj === false && editTodo.id === item.id
                        ? "Save"
                        : "Edit"}
                    </button>
                    <button
                      className="delete"
                      onClick={() => this.handleDeleteTodo(item)}
                    >
                      delete
                    </button>
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
