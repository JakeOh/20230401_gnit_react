import axios from 'axios';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Details = (props) => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const location = useLocation();
  //   console.log(location);
  //   console.log(location.state.id);
  //   console.log(props);

  useEffect(() => {
    const fetchData = async () => {
      const id = location.state.id;
      try {
        const {
          data: {
            data: { movie },
          },
        } = await axios.get(
          `https://yts-proxy.now.sh/movie_details.json?movie_id=${id}`,
        );
        // const movie = response.data.data.movie;

        setMovie(movie);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [location.state.id]);

  return (
    <div>
      {loading ? (
        <div>
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
          <h1>{movie.id}</h1>
          <h1>{movie.title}</h1>
        </div>
      )}
    </div>
  );
};

export default Details;
