import React, { Component } from 'react';

// Creates a Context object
const { Provider, Consumer } = React.createContext();

class ContextProvider extends Component {
    constructor(props) {
		super(props);
		this.state = {
			add: '',
            sub: '',
            mul: '',
            div: ''
		};
	}

    // calculate addition, substration, multiplication and Division 
    calculate = (a, b, c) => {
        if(c == "add") {
            let add = a + b;
            this.setState({
                add: add,
                sub: '',
                mul: '',
                div: ''
            })
        }else if(c == "sub") {
            let sub = a - b;
            this.setState({
                sub: sub,
                add: '',
                mul: '',
                div: ''
            })
        }else if(c == "mul") {
            let mul = a * b;
            this.setState({
                mul: mul,
                sub: '',
                add: '',
                div: ''
            })
        }else {
            let div = a / b;
            this.setState({
                div: div,
                mul: '',
                sub: '',
                add: '',
            })
        }
    }

    render() {
        return (
            <Provider value={{calculate: this.calculate, add: this.state.add, sub: this.state.sub, mul: this.state.mul, div: this.state.div }}>
                {this.props.children}
            </Provider>
        )
    }

}

export { ContextProvider , Consumer as ContextConsumer}
