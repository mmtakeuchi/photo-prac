const accessKey = process.env.REACT_APP_ACCESS_KEY;

export const fetchPhotosByKeyword = (keyword) => {
  console.log(keyword);
  fetch(
    `https://api.unsplash.com/search/photos?client_id=${accessKey}&query=${keyword}`
  )
    .then((resp) => resp.json())
    .then((data) => data)
    .catch((err) => console.log(err));
};
