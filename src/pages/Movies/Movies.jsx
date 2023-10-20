import { useEffect, useState } from "react";
import { useSearchParams, useLocation, Link } from "react-router-dom";
import { getMovieByQuery } from "helpers/api";
import style from 'components/MovieList/MovieList.module.css'

import SearchForm from "components/SearchForm/SearchForm";

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const [movies, setMovies] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    const query = searchParams.get('query');


    useEffect(() => {
        
        if (!query) return;
        
        const fetchMovieByQuery = async () => {
          try {
            setIsLoading(true);
            const movieByQuery = await getMovieByQuery(query);
            setMovies(movieByQuery);
          } catch (error) {
            setError(error.message)
          } finally {
            setIsLoading(false)
          }
        }
        fetchMovieByQuery();
      }, [query]);

      const handleFormSubmit = event => {
        event.preventDefault();
        const searchValue = event.currentTarget.elements.searchPostId.value;

        setSearchParams({query:searchValue})
      }

    return(
        <div>
          <SearchForm onSubmit={handleFormSubmit}/>

          <section className={style['card-list']}>
        {isLoading && <div>Loading...</div>}
        {error && <p>{error}</p>}
        {movies !== null &&
          movies.map(movie => (
            <Link
              state={{ from: location }}
              to={`/movies/${movie.id}`}
              key={movie.id}
            >
             <li > 
            <img src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} alt={movie.title}/>
            <h3 className={style['card-item']}>{movie.title}</h3>
        </li>
            </Link>
          ))}
      </section>
           
        </div>
    )
}

export default Movies;