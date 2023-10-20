import { Link } from "react-router-dom";
import style from 'components/MovieList/MovieList.module.css';


const MovieList = ({movies}) => {
    
    return(
        <div>
           <ul className={style['card-list']}>
        {movies.map((movie) => {return(
          
            <Link className={style['card-item']} to={`/movies/${movie.id}`} key={movie.id}>
          <li > 
            <img src={'https://image.tmdb.org/t/p/w500/' + movie.poster_path} alt={movie.title}/>
            <h3 className={style['card-title']}>{movie.title}</h3>
        </li>
          </Link>
          
          
          
        )})}    
        </ul>

        </div>
            

        
       
        
    )
}

export default MovieList;