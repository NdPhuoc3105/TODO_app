import React from "react";

class MyComponent extends React.Component{
    
    state = {
        name: 'Phuoc',
        age: '24'
    }

    handleOnChange = (event) => {
        this.setState({
            name : event.target.value
        })
    }

    render() { 
        return(
            <>

            <div className="first">hello First Component with Phuoc Dep Trai</div>
            
            <input value={this.state.name} type="Text" onChange={(event) => this.handleOnChange(event)}/>

            <div className="second">hello First Component with {this.state.name}</div>
            
            </>
        )
    }
}

export default MyComponent;