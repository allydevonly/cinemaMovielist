import React from 'react';

const Filter = ({ onFilterChange }) => {
  return (
    <div className="filter">
      <input type="text" placeholder="Filter by title" onChange={onFilterChange} />
      <input type="number" placeholder="Filter by rating" onChange={onFilterChange} />
    </div>
  );
}

export default Filter;
