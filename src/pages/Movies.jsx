import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMovieByQuery } from "helpers/api";
import MovieList from 'components/MovieList';
import SearchForm from "components/SearchForm";

const Movies = () => {

    const [movies, setMovies] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const currentQuery = searchParams.get('query');
        if (!currentQuery) return;
        
        const fetchMovieByQuery = async () => {
          try {
            const movieByQuery = await getMovieByQuery(currentQuery);
            setMovies(movieByQuery);
          } catch (e) {
            console.log(e);
          }
        }
        fetchMovieByQuery();
      }, [searchParams]);

  

    return(
        <div>
          <SearchForm setSearchParams={setSearchParams}/>
          {movies.length > 0 && <MovieList movies={movies} />}
        </div>
    )
}

export default Movies;