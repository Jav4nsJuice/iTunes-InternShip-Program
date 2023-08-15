import React, { useState } from 'react';

export const SearchInput = (props) => {
    const handleSearchTextChange = (event) => {
        props.handleSearchTextChange(event); // Pasar el evento al padre
    };
  
    return (
        <div className="search-input-container">
            <input
                className="search-input"
                type="search"
                value={props.searchText}
                placeholder="Search..."
                onChange={handleSearchTextChange}
            />
        </div>
    );
  };