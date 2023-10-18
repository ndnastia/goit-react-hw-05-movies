import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getMovieByQuery } from "helpers/api";
import MovieList from 'components/MovieList';
import SearchForm from "components/SearchForm";

const Movies = () => {

    const [movies, setMovies] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();

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