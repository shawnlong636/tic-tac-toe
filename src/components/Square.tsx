import React from 'react';
import './Square.scss';

interface SquareProps {
  value: string;
  onClick(): void;
}

export class Square extends React.Component<SquareProps, {}> {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}
