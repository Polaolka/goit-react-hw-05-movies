import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from '../Loader/Loader';
import { fetchMovieCasts } from '../../apiServises/apiServises';
import { Container } from '../Container/Container';
import css from '../Cast/Cast.module.css';
import UserSymbol from '../../Img/UserSymbol.png';

const Cast = () => {
  const { movieId } = useParams();
  const [isMoviesLoading, setIsMoviesLoading] = useState(true);
  const [casts, setCasts] = useState(null);

  useEffect(() => {
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
  if (casts.length === 0) {
    return <div className={css.noInfo}>There is no information</div>;
  }
  return (
    <Container>
      <ul className={css.galleryWrapper}>
        {casts.map(cast => {
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
