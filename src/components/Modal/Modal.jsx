import React, { useEffect } from 'react';
import './Modal.styles.css';

const Modal = ({ image, setIsOpen, isOpen }) => {
  console.log(image);

  useEffect(() => {
    const closeOnEscapeKeyDown = (e) => {
      if (e.code === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', closeOnEscapeKeyDown);

    return () => window.removeEventListener('keydown', closeOnEscapeKeyDown);
  }, [setIsOpen]);

  return (
    <div className="modal-container" onClick={() => setIsOpen(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-button" onClick={() => setIsOpen(false)}>
          X
        </button>
        <div className="modal-header">
          <img
            className="image-user-profoile_img"
            src={image.user.profile_image.small}
            alt={image.user.username}
          />
          <div className="image-user">
            <a className="image-user-name" href={image.user.links.html}>
              {image.user.name}
            </a>
            <div className="image-user-username">{image.user.username}</div>
          </div>
        </div>
        <div className="modal-image">
          <img className="" src={image.urls.full} alt={image.alt_description} />
        </div>
        <div className="modal-credits">
          <p>
            Photo by{' '}
            <a
              href={`https://unsplash.com/${image.user.username}?utm_source=your_app_name&utm_medium=referral`}
            >
              {image.user.name}
            </a>{' '}
            on{' '}
            <a href="https://unsplash.com/?utm_source=your_app_name&utm_medium=referral">
              Unsplash
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
