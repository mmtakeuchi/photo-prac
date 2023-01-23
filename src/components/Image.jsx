import React from 'react';
import './Image.styles.css';

const Image = ({ image }) => {
  return <img src={image.urls.thumb} alt={image.alt_description} />;
};

export default Image;
