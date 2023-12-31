import React from "react";

class ChildComponent extends React.Component {
  state = {
    firstName: "",
    lastName: "",
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

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(">>> Check props:", this.props);
  };

  render() {
    console.log("Props:", this.props);

    let { name, age, JobsInfo } = this.props;

    return (
      <>
        <div className="first_child">
          Child Component: {name} - {age}
        </div>
        <div className="second_child">
          Build_In Component:
          {JobsInfo.map((item, index) => {
            return (
              <div key={item.id}>
                {item.title} --- {item.salary}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default ChildComponent;
