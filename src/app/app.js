import React from 'react';
import Counter from './counter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      mount: true,
    };

    this.mountCounter = () => {
      this.setState({ mount: true });
    };

    this.unmountCounter = () => {
      this.setState({ mount: false });
    };
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.mountCounter} disabled={this.state.mount}>
            Mount Counter
          </button>
          <button onClick={this.unmountCounter} disabled={!this.state.mount}>
            Unmount Counter
          </button>
        </div>
        {this.state.mount ? <Counter /> : null}
      </div>
    );
  }
}

export default App;
