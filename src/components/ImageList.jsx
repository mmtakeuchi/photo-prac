import React, { useState, useEffect } from 'react';
import { fetchRandomPhotos } from '../utils/index';
import Image from './Image';
import './ImageList.styles.css';

const ImageList = ({ images }) => {
  const [randomImages, setRandomImages] = useState(
    images?.length ? images : []
  );

  const getImages = () => {
    fetchRandomPhotos().then((photos) => setRandomImages(photos));
  };

  useEffect(() => {
    getImages();
  }, []);

  return (
    <div className="images-container">
      {images?.length
        ? images?.map((image) => <Image key={image.id} image={image} />)
        : randomImages?.map((image) => <Image key={image.id} image={image} />)}
    </div>
  );
};

export default ImageList;
