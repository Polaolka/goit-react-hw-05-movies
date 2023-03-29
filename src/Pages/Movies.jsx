import { Link } from 'react-router-dom';

const Movies = () => {
  // HTTP запит у useEffect, []

  return (
    <div>
      <form >
        <input type="text" />
        <button type='submit'>Search</button>
      </form>
      {['movie-1', 'movie-2', 'movie-3', 'movie-4', 'movie-5'].map(m => {
        return (
          <li>
            <Link key={m} to={`${m}`}>
              {`it's info about ${m}`}
            </Link>
          </li>
        );
      })}
    </div>
  );
};
export default Movies;
