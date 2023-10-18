import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMovieByQuery } from "helpers/api";
import MovieList from 'components/MovieList';

const Movies = () => {

    const [movies, setMovies] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query');

    useEffect(() => {
        
        if (!query) return;
        const query = searchParams.get('query');
        const fetchMovieByQuery = async () => {
          try {
            const movieByQuery = await getMovieByQuery(query);
            setMovies(movieByQuery);
          } catch (e) {
            console.log(e);
          }
        };
        fetchMovieByQuery();
      }, [searchParams]);

      const visibleMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(query.toLowerCase())
  );
      
    
  const updateQueryString = (name) => {
    const nextParams = name !== "" ? { name } : {};
    setSearchParams(nextParams);
  };

    return(
        <div>
            <form>
                
                    <input type="text" name={query} placeholder="type movie name" required  onChange={(e) => updateQueryString(e.target.value)}/>
                    <button type="button">Search</button>
            </form>

            <MovieList movies={visibleMovies} />
        </div>
    )
}

export default Movies;