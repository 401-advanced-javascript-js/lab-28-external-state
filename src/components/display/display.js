/* eslint-disable react/prop-types */
import React from 'react';

export default class Display extends React.Component {
  render() {
    return (
      <>
        <div>Name: {this.props.name}</div>
        <div># of Updates: {this.props.count}</div>
      </>
    );
  }
}
