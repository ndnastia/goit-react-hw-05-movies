import { useEffect, useState } from "react";
import {fetchTrendingNow} from "helpers/api";
import MovieList from "components/MovieList";


const Home = () => {

    const [movies, setMovies] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

   

    useEffect(() => {
        const fetchTrendingMovies= async () => {
            try {
              setIsLoading(true);
        
              const movies = await fetchTrendingNow();
              setMovies(movies);
              
            } catch (error) {
              setError(error.message);
            } finally {
              setIsLoading(false);
            }
          }

          fetchTrendingMovies();

    }, [])

    const showMovies = Array.isArray(movies) && movies.length;
    return(
        <main>
             <ul >
        {showMovies && <MovieList movies={movies} />}    
        </ul>

        {isLoading && <div>Loading..</div>}
        {error && <p>{error}</p>}
        </main>
       
        
    )
    
}

export default Home;