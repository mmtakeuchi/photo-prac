import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGetImagesByKeywordQuery } from '../../store/imageApi';
import ImageList from '../../components/ImageList/ImageList';
import './QueryImages.styles.css';

const QueryImages = () => {
  const { query } = useParams();
  const { data, error, isLoading } = useGetImagesByKeywordQuery(query);

  if (error) return <div>An error has occurred!</div>;

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <h2>{query.charAt(0).toUpperCase() + query.slice(1)}</h2>
      <ImageList images={data.results} />
    </>
  );
};

export default QueryImages;
