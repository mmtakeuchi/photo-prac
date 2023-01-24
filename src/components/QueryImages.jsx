import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchPhotosByKeyword } from '../utils/index';
import ImageList from './ImageList';
import './QueryImages.styles.css';

const QueryImages = ({ images }) => {
  const [queryImages, setQueryImages] = useState(images ? images : []);
  const { query } = useParams();

  const getSearchImages = () => {
    fetchPhotosByKeyword(query).then((photos) =>
      setQueryImages(photos.results)
    );
  };

  useEffect(() => getSearchImages(), [query]);

  return (
    <>
      <ImageList images={queryImages} />
    </>
  );
};

export default QueryImages;
