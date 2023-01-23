import React, { useState } from 'react';
import ImageList from './ImageList';

const QueryImages = ({ images }) => {
  return (
    <div className="images-container">
      <ImageList images={images} />
    </div>
  );
};

export default QueryImages;
