import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { fetchMovieCasts } from '../../apiServises/apiServises';
import { Container } from '../Container/Container';
import css from '../Cast/Cast.module.css';
import UserSymbol from './UserSymbol.png';

const Cast = () => {
  const { movieId } = useParams();
  const [isMoviesLoading, setIsMoviesLoading] = useState(true);
  const [casts, setCasts] = useState(null);
  const location = useLocation();
  // const backLinkLocationRef = useRef(location?.state?.from ?? '/movies')

  useEffect(() => {
    // setIsMoviesLoading(true);
    async function fetchData() {
      const response = await fetchMovieCasts(movieId);
      setCasts(response);
      setIsMoviesLoading(false);
    }
    fetchData();
  }, [movieId]);
  if (isMoviesLoading) {
    return <Loader />;
  }
  return (
    <Container>
      <ul className={css.galleryWrapper}>
        {casts.map(cast => {
          console.log(cast.profile_path);
          return (
            <li className={css.galleryItem} key={`${cast.credit_id}`}>
              <img
                className={css.galleryImage}
                src={
                  cast.profile_path !== null
                    ? `https://image.tmdb.org/t/p/w200${cast.profile_path}`
                    : UserSymbol
                }
                alt={cast.original_name}
              />
              <div className={css.galleryInfo}>
                <div className={css.actorName}>{cast.original_name}</div>
                <div>{cast.character}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </Container>
  );
};

export default Cast;

// character : "Scott Lang / Ant-Man"
// credit_id
// :
// "5da88f43a2423200177bf176"

// original_name
// :
// "Paul Rudd"

// profile_path
// :
// "/8eTtJ7XVXY0BnEeUaSiTAraTIXd.jpg"
