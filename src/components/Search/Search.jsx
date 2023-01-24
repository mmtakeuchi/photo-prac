import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Search.styles.css';

const Search = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState('');

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/images/${value}`);
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
          value={value}
          placeholder="Search photos"
        />
      </form>
    </div>
  );
};

export default Search;
