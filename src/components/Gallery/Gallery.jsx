import React from 'react';
// import PropTypes from 'prop-types';
import { FilmGalleryItem } from '../FilmGalleryItem/FilmGalleryItem';

import css from '../Gallery/Gallery.module.css';
// backdrop_path, original_title, id, overview
export const Gallery = ({movies}) => {
  return (
<div className={css.container}>
        <ul className={css.gallery}>
          {movies &&
            movies.map(({ id, backdrop_path, original_title, popularity, release_date }) => (
              <FilmGalleryItem
                // onClickImg={onClickImg}
                release_date={release_date}
                key={`${id}`}
                id={id}
                backdrop_path={backdrop_path}
                target="_blank"
                rel="noreferrer noopener"
                original_title={original_title}
                popularity={popularity}
              />
            ))}
        </ul>

      </div>
  );
};