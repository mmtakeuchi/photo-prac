import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './ImageItem.styles.css';

const Image = ({ image }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <img
        className="image-item"
        src={image.urls.thumb}
        alt={image.alt_description}
        onClick={() => setIsOpen(true)}
      />
      {isOpen && <Modal image={image} isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default Image;
