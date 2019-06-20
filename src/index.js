import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
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
