import React from 'react';
import { ColorRing } from 'react-loader-spinner';
import css from '../Loader/Loader.module.css';

export const Loader = () => {
  return (
<div className={css.loaderWrapper}>
        <ColorRing
          margin="0 auto"
          visible={true}
          height="100"
          width="100"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#ff2045', '#8a6a90', '#b6000c', '#ff93b7', '#671332']}
        />
      </div>
  );
};
