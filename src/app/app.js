import React from 'react';
import Counter from './counter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 40,
    };

    this.mountCounter = () => this.setState({ mount: true });
    this.unmountCounter = () => this.setState({ mount: false });
    this.ignoreProp = () => this.setState({ ignoreProp: Math.random() });
    this.seedGen = () =>
      this.setState({ seed: Number.parseInt(Math.random() * 100) });
  }

  render() {
    return (
      <div>
        <button onClick={this.mountCounter} disabled={this.state.mount}>
          Mount Counter
        </button>
        <button onClick={this.unmountCounter} disabled={!this.state.mount}>
          Unmount Counter
        </button>
        <button onClick={this.ignoreProp}>Ignore prop</button>
        <button onClick={this.seedGen}>Generate seed</button>
        {this.state.mount ? (
          <Counter
            ignoreProp={this.state.ignoreProp}
            seedGen={this.state.seedGen}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
