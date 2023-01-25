import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { close } from '../../store/modalSlice';
import './Modal.styles.css';

const Modal = () => {
  const dispatch = useDispatch();
  const { isOpen, image } = useSelector((state) => state.modal);

  useEffect(() => {
    const closeOnEscapeKeyDown = (e) => {
      if (e.code === 'Escape') {
        dispatch(close());
      }
    };

    window.addEventListener('keydown', closeOnEscapeKeyDown);

    return () => window.removeEventListener('keydown', closeOnEscapeKeyDown);
  }, [dispatch, isOpen]);

  return (
    <div className="modal-container" onClick={() => dispatch(close())}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-button" onClick={() => dispatch(close())}>
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
