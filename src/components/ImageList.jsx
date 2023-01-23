import React, { useState, useEffect } from 'react';
import { fetchRandomPhotos } from '../utils/index';
import Image from './Image';
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
        <Image key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageList;
