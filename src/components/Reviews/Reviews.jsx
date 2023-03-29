const { useParams } = require('react-router-dom');

const Rewiews = () => {
  const { movieId } = useParams();

  // useEffect(() => {
  // HTTP запрос, если нужно
  // }, [])

  return <div>Rewiews: {movieId}</div>;
};

export default Rewiews;
