import { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from '../components/Movie';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]); // Ajax 요청 결과에서 영화 배열을 저장하기 위한 상태.

  /*
  useEffect(() => {
    // (성공, 에러) 콜백 함수 등록을 이용한 axios 사용법:
    axios
      .get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating') // GET 요청 보냄.
      .then((response) => {
        // console.log(response); // axiso에서 response는 HTTPResopnse를 감싸는 proxy 객체.
        // console.log(response.data); // data 속성 - 서버에서 온 응답.
        console.log(response.data.data.movies);

        // 응답에 포함된 movies 배열로 state를 변경
        setMovies(response.data.data.movies);
        // 페이지 로딩 state를 변경
        setLoading(false);
      }) // success 응답일 때 실행할 콜백 등록.
      .catch((error) => console.log(error)) // error 응답일 때 실행할 콜백 등록.
      .finally(() => console.log('finally')); // success/error 여부와 상관없이 항상 실행할 콜백 등록.
  }, []);
  */

  useEffect(() => {
    // async-await를 사용한 axios 사용법:
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://yts-proxy.now.sh/list_movies.json?sort_by=rating',
        );
        console.log(response.data.data.movies);

        setMovies(response.data.data.movies);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData(); // async 함수 실행
  }, []);

  return (
    <div>
      {loading
        ? 'Loading...'
        : movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              title={movie.title}
              poster={movie.medium_cover_image}
              year={movie.year}
              genres={movie.genres}
              summary={movie.summary}
              rating={movie.rating}
            />
          ))}
    </div>
  );
};

export default Home;
