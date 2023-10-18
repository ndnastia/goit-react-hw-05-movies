import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCastMovie } from "helpers/api";

const Cast = () => {

    const [cast, setCast] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const {movieId} = useParams();


    useEffect(() => {
        if (!movieId) return;
  
      const fetchMovieCast = async () => {
        try {
          setIsLoading(true);
          const movieCast = await getCastMovie(movieId);
  
          setCast(movieCast);
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchMovieCast();
    }, [movieId])


    return(
        <div>
             {cast !== null && <ul>{cast.map(({profile_path, name, character, id}) => {
            return(
                <div key={id}>
                   <img src={'https://image.tmdb.org/t/p/w500/' + profile_path} alt={name}/>
                <h3>{name}</h3>
                <h3>{character}</h3> 
                </div>
                
            )
        })}</ul>}

        {isLoading && <div>Loading..</div>}
        {error && <p>{error}</p>}
        </div>
       
    )
}

export default Cast;