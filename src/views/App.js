import logo from "./logo.svg";
import "./App.scss";
import "./Todos/ListTodo.scss";
import ListTodo from "./Todos/ListTodo";
// import MyComponent from "./Example/MyComponent";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple Todo's App with ReactJs !!!
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>

        {/* <MyComponent /> */}
        <ListTodo />
      </header>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
