import React, { Component } from 'react';

class Testclass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color : "red",
            count : 0
        }

    }

    updateColor = () => {
        this.setState({color: "blue"})
    }
    


    shouldComponentUpdate(nextProps, nextState) {
        return true
    }

    componentWillUpdate(nextProps, nextState) {
        alert("Component will update")
    }

    componentDidUpdate(prevProps, prevState) {
        alert("component has updated")
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <p>The color of my car is {this.state.color}</p>
                <p>My count {this.state.count}</p>
                <button onClick={this.updateColor}>Change Color</button>
                <button onClick={(prev) => this.setState({count : prev.count++})}>Increase</button>

            </div>
        );
    }
}


export default Testclass;