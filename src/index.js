import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app';

class Script extends React.Component {
  render() {
    return (
      <div>
        <App />
      </div>
    );
  }
}

ReactDOM.render(<Script />, document.getElementById('root'));
