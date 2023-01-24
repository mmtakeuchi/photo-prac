import {
  createApi,
  createBaseQuery,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

const accessKey = process.env.REACT_APP_ACCESS_KEY;

export const imagesApi = createApi({
  reducerPath: 'imagesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.unsplash.com/' }),
  endpoints: (builder) => ({
    getRandomImages: builder.query({
      query: () => `photos?client_id=${accessKey}&per_page=20`,
    }),
    getImagesByKeyword: builder.query({
      query: (keyword) =>
        `search/photos?client_id=${accessKey}&query=${keyword}&per_page=20`,
    }),
  }),
});

export const { useGetRandomImagesQuery, useGetImagesByKeywordQuery } =
  imagesApi;
