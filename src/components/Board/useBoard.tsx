import React, {useState} from 'react';
import {Square} from '../Square/Square';

export function useBoard() {
  const [squares, setSquares] = useState<Array<string>>(Array(9).fill(''));
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  // Private Methods
  const calculateWinner = (squares: Array<string>): string => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const line of lines) {
      const [a, b, c] = line;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return '';
  };

  const handleClick = (i: number) => {
    const sliced_squares = squares.slice();
    sliced_squares[i] = xIsNext ? 'X' : 'O';
    setSquares(sliced_squares);
    setXIsNext(!xIsNext);
  };

  // Public Methods
  const renderSquare = (i: number): JSX.Element => {
    return <Square value={squares[i]} onClick={() => handleClick(i)} />;
  };

  const getStatus = (): string => {
    const winner = calculateWinner(squares);
    let status;
    if (winner !== '') {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
    return status;
  };

  return {renderSquare, getStatus};
}
