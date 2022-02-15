import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    console.log('constructor for Counter.');
    super(props);
    this.state = {
      counter: 0,
    };
    this.incremement = () => this.setState({ counter: this.state.counter + 1 });
    this.decremement = () => this.setState({ counter: this.state.counter - 1 });
  }

  componentDidMount() {
    console.log('Component Did Mount');
    console.log('-------------------');
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (
      nextProps.ignoreProp &&
      this.props.ignoreProp !== nextProps.ignoreProp
    ) {
      console.log('Should component update - do not render');
      return false;
    }
    console.log('should component update - render');
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component Did Update');
    console.log('-------------------');
  }

  componentWillUnmount() {
    console.log('Component Will Unmount');
    console.log('-------------------');
  }

  render() {
    console.log('Render');
    return (
      <div>
        <button onClick={this.incremement}>incremement</button>
        <button onClick={this.decremement}>decremement</button>
        <div className="counter">Counter: {this.state.counter}</div>
      </div>
    );
  }
}

export default Counter;
