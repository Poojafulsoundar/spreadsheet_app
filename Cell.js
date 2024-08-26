// Cell.js
import React, { useState } from 'react';
import { useStore } from '../store/gridStore';

const Cell = ({ id }) => {
  const [isEditing, setIsEditing] = useState(false);
  const value = useStore(state => state.cells[id] || '');
  const updateCell = useStore(state => state.updateCell);

  const handleBlur = () => setIsEditing(false);
  const handleChange = (e) => updateCell(id, e.target.value);

  return (
    <div
      className="cell"
      onClick={() => setIsEditing(true)}
    >
      {isEditing ? (
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        value
      )}
    </div>
  );
};

export default Cell;
