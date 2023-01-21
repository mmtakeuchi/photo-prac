import React, { useState } from 'react';
import { fetchPhotosByKeyword } from '../utils/index';
import './Search.styles.css';

const Search = () => {
  const [query, setQuery] = useState('');

  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPhotosByKeyword(query);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <button onClick={handleSubmit}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-search"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="10" cy="10" r="7"></circle>
            <line x1="21" y1="21" x2="15" y2="15"></line>
          </svg>
        </button>
        <input
          type="search"
          onChange={handleInput}
          value={query}
          placeholder="Search photos"
        />
      </form>
    </div>
  );
};

export default Search;
