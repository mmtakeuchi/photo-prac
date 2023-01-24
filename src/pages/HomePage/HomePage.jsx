import React from 'react';
import { useGetRandomImagesQuery } from '../../store/imageSlice';
import ImageList from '../../components/ImageList/ImageList';
import './HomePage.styles.css';

const HomePage = () => {
  const { data, error, isLoading } = useGetRandomImagesQuery();

  return (
    <>
      <ImageList images={data} />
    </>
  );
};

export default HomePage;
