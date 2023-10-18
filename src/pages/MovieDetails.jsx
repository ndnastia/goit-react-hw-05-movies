import { useEffect, useState, Suspense, useRef } from "react";
import {getMovieById} from "helpers/api";
import { useParams, Link, Outlet, useLocation } from "react-router-dom";


const MovieDetails = () => {

    const { movieId } = useParams();
    const location = useLocation();
    const backLinkHref = useRef(location.state?.from ?? '/');

    const [details, setDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    
 

    useEffect(() => {
      if (!movieId) return;
  
      const fetchMovieDetails = async () => {
        try {
          setIsLoading(true);
          const movieData = await getMovieById(movieId);
  
          setDetails(movieData);
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchMovieDetails();
    }, [movieId]);

    
  return(
    <main>
       <Link to={backLinkHref.current}>Go Back</Link>
      { details !== null &&
         <div>
            <div>
            <img src={'https://image.tmdb.org/t/p/w500/' + details.poster_path} alt={details.title}/>
            </div>
            <div>
                <h1>{details.title}</h1>

                <h3>User Score: {Math.round(details.vote_average)}</h3> 

                <div>
                  <h2>Overview</h2>
                <p>{details.overview}</p>
                </div>

                <div>
                  <h2>Genres</h2>
                  <p>{details.genres?.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}</p>
                </div>
                
            </div>
        </div>}

        <ul>
          <nav>
            <Link to='cast'>
            Cast
            </Link>
            <Link to='reviews'>
              Reviews
            </Link>
          </nav>
        </ul>

        {isLoading && <div>Loading..</div>}
        {error && <p>{error}</p>}

        <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </main>
  )
}

export default MovieDetails;