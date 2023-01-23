import React, { useState, useEffect } from 'react';
import { fetchPhotosByKeyword } from './utils/index';
import Header from './components/Header';
import Search from './components/Search';
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
        <ImageList images={images} />
        <QueryImages images={images} />
      </main>
    </div>
  );
}

export default App;
