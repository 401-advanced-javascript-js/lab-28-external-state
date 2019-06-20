import React from 'react';
import Display from './components/display/display';
import Form from './components/form/form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: '',
    };
  }

  handleSubmit = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleChange = (name) => {
    this.setState({ name });
  };

  render() {
    return (
      <>
        <Display name={this.state.name} count={this.state.count} />
        <Form handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
      </>
    );
  }
}
