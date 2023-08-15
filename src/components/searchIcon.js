import React from 'react';

export const SearchIcon = (props) => {
    return (
        <button className="button" onClick={props.startSearch}>
            <i className="material-icons search-icon">search</i>
        </button>
    );
};