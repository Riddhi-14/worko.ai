// src/components/Common/SearchComponent.js
import React from 'react';

const SearchComponent = ({ onSearch }) => {
  const handleSearch = event => {
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <input
      type="text"
      className="form-control"
      placeholder="Search..."
      onChange={handleSearch}
      onFocus={() => console.log('Input focused')}
      onBlur={() => console.log('Input blurred')}
    />
  );
};

export default SearchComponent;
