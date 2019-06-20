/* eslint-disable react/prop-types */
import React from 'react';

export default class Form extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSubmit();
  };

  handleChange = (event) => {
    this.props.handleChange(event.target.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
