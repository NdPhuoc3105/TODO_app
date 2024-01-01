import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  state = {
    arrJobs: [
      { id: "abcJob1", title: "Developer", salary: "500" },
      { id: "abcJob2", title: "Tester", salary: "400" },
      { id: "abcJob3", title: "Project Manager", salary: "1500" },
    ],
  };

  addNewJob = (job) => {
    console.log(">> Check job from parents:", job);
    this.setState({
      arrJobs: [...this.state.arrJobs, job],
    });
  };

  render() {
    console.log("State:", this.state);

    return (
      <>
        <AddComponent addNewJob={this.addNewJob} />

        <ChildComponent JobsInfo={this.state.arrJobs} />
      </>
    );
  }
}

export default MyComponent;
