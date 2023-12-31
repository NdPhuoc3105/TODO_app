import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    theAge: "",
    arrJobs: [
      { id: "abcJob1", title: "Developer", salary: "$500" },
      { id: "abcJob2", title: "Tester", salary: "$400" },
      { id: "abcJob3", title: "Project Manager", salary: "$1500" },
    ],
  };

  handleFirstName = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleLastName = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleTheAge = (event) => {
    this.setState({
      theAge: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(">>> Check state:", this.state);
  };

  render() {
    console.log("State:", this.state);

    return (
      <>
        <form>
          <label htmlFor="fname">First name:</label>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(event) => this.handleFirstName(event)}
          />
          <br />
          <label htmlFor="lname">Last name:</label>
          <br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(event) => this.handleLastName(event)}
          />
          <br />
          <label htmlFor="age">age:</label>
          <br />
          <input
            type="number"
            value={this.state.theAge}
            onChange={(event) => this.handleTheAge(event)}
          />
          <br />
          <input
            type="submit"
            value="Submit"
            onClick={(event) => this.handleSubmit(event)}
          />
        </form>
        <ChildComponent
          name={this.state.firstName + " " + this.state.lastName}
          age={this.state.theAge}
          JobsInfo={this.state.arrJobs}
        />
      </>
    );
  }
}

export default MyComponent;
