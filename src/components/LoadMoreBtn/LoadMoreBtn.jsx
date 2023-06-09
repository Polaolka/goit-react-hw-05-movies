import React from 'react';
// import PropTypes from 'prop-types';

import css from '../LoadMoreBtn/LoadMoreBtn.module.css';


export const LoadMoreBtn = ({onloadMore}) => {
    
  return (
    <button className={css.loadMoreBtn} type="button" onClick={onloadMore}>
      Load more
    </button>
  );
}

// LoadMoreBtn.propTypes = {
//   onloadMore:PropTypes.func,
// }