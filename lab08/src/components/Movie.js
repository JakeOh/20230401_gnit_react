const Movie = ({ id, title, year, rating, genres, summary, poster }) => {
  return (
    <>
      <img src={poster} alt={title} />
      <div>
        <h3>{title}</h3>
        <h5>{year}</h5>
        <h5>{rating}</h5>
        <ul>
          {genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
        <p>{summary.slice(0, 200)}</p>
      </div>
    </>
  );
};

export default Movie;
