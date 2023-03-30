import { useState } from 'react';
// import PropTypes from 'prop-types';
import css from '../SearchForm/SearchForm.module.css';
import { FcSearch } from 'react-icons/fc';
import { IconContext } from 'react-icons';

export const SearchForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = e => {
    setSearchQuery(s => (s = e.target.value.toLowerCase()));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(searchQuery);

    setSearchQuery('');
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
      className={css.input}
        name="query"
        type="text"
        onChange={handleInputChange}
        value={searchQuery}
      />
      <button type="submit">
        <IconContext.Provider value={{ size: '25px' }}>
          <FcSearch />
        </IconContext.Provider>
      </button>
    </form>
  );
};
