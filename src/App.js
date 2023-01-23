import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { fetchPhotosByKeyword } from './utils/index';
import Header from './components/Header';
import Search from './components/Search';
import HomePage from './components/HomePage';
import QueryImages from './components/QueryImages';
import ImageList from './components/ImageList';
import './App.css';

function App() {
  const [images, setImages] = useState([]);
  const [queryKeyword, setQueryKeyword] = useState('');

  const getSearchImages = () => {
    if (queryKeyword) {
      fetchPhotosByKeyword(queryKeyword).then((photos) => setImages(photos));
    }
  };

  useEffect(() => getSearchImages(), [queryKeyword]);

  return (
    <div className="app">
      <Header />
      <main>
        <Search setQueryKeyword={setQueryKeyword} />

        <Routes>
          <Route path="/" element={<ImageList images={images} />} />
          <Route
            path="/images/:query"
            element={<QueryImages images={images} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
