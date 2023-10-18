import { Link } from "react-router-dom";
const MovieList = ({movies}) => {
    
    return(
        <main>
             <ul >
        {movies.map((movie) => {return(
          <div key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
          <li > 
            <img src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} alt={movie.title}/>
            <p>{movie.title}</p>
        </li>
          </Link>
          
          </div>
          
        )})}    
        </ul>


        </main>
       
        
    )
}

export default MovieList;