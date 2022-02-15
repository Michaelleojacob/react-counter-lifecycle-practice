import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log('constructor for Counter.');
  }

  componentDidMount() {
    console.log('Component Did Mount');
    console.log('-------------------');
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
    const { counter, incrementCounter, decrementCounter } = this.props;
    return (
      <div>
        <button onClick={incrementCounter}>increment</button>
        <button onClick={decrementCounter}>decrement</button>
        <div className="counter">Counter: {counter}</div>
      </div>
    );
  }
}

export default Counter;
