import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { fetchRandomPhotos, fetchPhotosByKeyword } from './utils/index';
import Header from './components/Header';
import Search from './components/Search';
import HomePage from './components/HomePage';
import QueryImages from './components/QueryImages';
import ImageList from './components/ImageList';
import './App.css';

function App() {
  const [queryImages, setQueryImages] = useState([]);
  const [randomImages, setRandomImages] = useState([]);
  const [queryKeyword, setQueryKeyword] = useState('');

  const getImages = () => {
    fetchRandomPhotos().then((photos) => setRandomImages(photos));
  };

  const getSearchImages = () => {
    fetchPhotosByKeyword(queryKeyword).then((photos) =>
      setQueryImages(photos.results)
    );
  };

  useEffect(() => getImages(), []);
  useEffect(() => getSearchImages(), [queryKeyword]);

  return (
    <div className="app">
      <Header />
      <main>
        <Search setQueryKeyword={setQueryKeyword} />

        <Routes>
          <Route path="/" element={<ImageList images={randomImages} />} />
          <Route
            path="/images/:query"
            element={<QueryImages images={queryImages} />}
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
