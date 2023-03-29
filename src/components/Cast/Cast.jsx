const { useParams } = require('react-router-dom');

const Cast = () => {
  const { movieId } = useParams();

  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])

  return <div>Image actors: {movieId}</div>;
};
export default Cast;