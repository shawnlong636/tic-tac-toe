import React from 'react';
import './Square.scss';

export class Square extends React.Component<{value: Number}, {value: String}> {
  state: {value: String} = {
    value: '',
  };
  render() {
    return (
      <button className="square" onClick={() => this.setState({value: 'X'})}>
        {this.state.value}
      </button>
    );
  }
}
