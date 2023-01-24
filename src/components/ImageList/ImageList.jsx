import React, { useState, useEffect } from 'react';
import Image from '../ImageItem/ImageItem';
import './ImageList.styles.css';

const ImageList = ({ images }) => {
  return (
    <div className="images-container">
      {images?.length > 0 &&
        images?.map((image) => <Image key={image.id} image={image} />)}
    </div>
  );
};

export default ImageList;
