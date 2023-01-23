import React, { useState, useEffect } from 'react';
import { fetchRandomPhotos } from '../utils/index';
import './ImageList.styles.css';

const ImageList = () => {
  const [images, setImages] = useState([]);
  console.log(images);

  const getImages = () => {
    fetchRandomPhotos().then((photos) => setImages(photos));
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="images-container">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.urls.thumb}
          alt={image.alt_description}
        />
      ))}
    </div>
  );
};

export default ImageList;
