import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { open } from '../../store/modalSlice';
import Modal from '../Modal/Modal';
import './ImageItem.styles.css';

const Image = ({ image }) => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modal);

  return (
    <>
      <img
        className="image-item"
        src={image.urls.thumb}
        alt={image.alt_description}
        onClick={() => dispatch(open(image))}
      />
      {isOpen && <Modal image={image} />}
    </>
  );
};

export default Image;
