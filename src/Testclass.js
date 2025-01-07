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
        this.setState({
            color : "blue"
        })
    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <p>The color of my car is {this.state.color}</p>
                <p>My count {this.state.count}</p>
                <button onClick={this.updateColor}>Change</button>
                <button onClick={(prev) => this.setState({count : prev.count++})}>Increase</button>

            </div>
        );
    }
}


export default Testclass;