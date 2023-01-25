import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { modal } from './store/index';
import { fetchRandomPhotos, fetchPhotosByKeyword } from './utils/index';
import Header from './components/Header/Header';
import Search from './components/Search/Search';
import HomePage from './pages/HomePage/HomePage';
import QueryImages from './pages/QueryImages/QueryImages';
import ImageList from './components/ImageList/ImageList';
import './App.css';

function App() {
  const { isOpen } = useSelector((state) => state.modal);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [isOpen]);

  return (
    <div className="app">
      <Header />
      <main>
        <Search />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/images/:query" element={<QueryImages />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
