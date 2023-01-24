const accessKey = process.env.REACT_APP_ACCESS_KEY;

export const fetchPhotosByKeyword = async (keyword) => {
  try {
    const resp = await fetch(
      `https://api.unsplash.com/search/photos?client_id=${accessKey}&query=${keyword}&per_page=20`
    );
    const data = await resp.json();

    return data;
  } catch (err) {
    return err;
  }
};

export const fetchRandomPhotos = async () => {
  try {
    const resp = await fetch(
      `https://api.unsplash.com/photos?client_id=${accessKey}&per_page=20`
    );
    const data = await resp.json();

    return data;
  } catch (err) {
    return err;
  }
};
