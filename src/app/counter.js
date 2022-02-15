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

  // no longer a supported method
  // static getDerivedStateFromProps(props, state) {
  //   if (props.seed && state.seed !== props.seed) {
  //     return {
  //       seed: props.seed,
  //       counter: props.seed,
  //     };
  //   }
  //   return null;
  // }

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
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component Did Update');
    console.log('-------------------');
  }
}

export default Counter;
