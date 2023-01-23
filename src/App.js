import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import ImageList from './components/ImageList';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Search />
        <ImageList />
      </main>
    </div>
  );
}

export default App;
