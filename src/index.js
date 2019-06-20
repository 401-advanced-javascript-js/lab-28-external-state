import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: '',
    };
  }

  render() {
    return (
      <>
        <div>Name: </div>
        <div># of Updates: </div>
      </>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
