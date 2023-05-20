import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  return <div>{loading ? 'Loading...' : 'Reay!'}</div>;
}

export default App;
