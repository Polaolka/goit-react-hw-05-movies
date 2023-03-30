import React from 'react';
import { Link } from 'react-router-dom';

// import PropTypes from 'prop-types';
import css from '../FilmGalleryItem/FilmGalleryItem.module.css';

export const FilmGalleryItem = ({
  backdrop_path,
  original_title,
  id,
  popularity,
  release_date
}) => {
  return (
    <Link to={`/movies/${id}`} className={css.galleryItem} id={id} >
      <img
        className={css.galleryImage}
        src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        alt={original_title}
        data-modal={backdrop_path}
        data-tags={original_title}
      />
      <div className={css.galleryInfo}>
        <h3>{original_title}</h3>
        <div>release date: {release_date}</div>
        <div>Popularity: {popularity}</div>
        </div>
    </Link>
  );
};
// onClick={onClickImg}
