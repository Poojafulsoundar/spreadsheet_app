// Grid.js
import React from 'react';
import Cell from './Cell';

const Grid = () => {
  const rows = 50;
  const cols = 20;
  const cells = Array.from({ length: rows * cols });

  return (
    <div className="grid">
      {cells.map((_, idx) => (
        <Cell key={idx} id={idx} />
      ))}
    </div>
  );
};

export default Grid;
