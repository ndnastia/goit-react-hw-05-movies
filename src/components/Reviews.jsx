import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviewsMovie } from "helpers/api";

const Reviews = () => {

    const [reviews, setReviews] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const {movieId} = useParams();


    useEffect(() => {
        if (!movieId) return;
  
      const fetchMovieCast = async () => {
        try {
          setIsLoading(true);
          const movieReviews = await getReviewsMovie(movieId);
  
          setReviews(movieReviews);
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
             {reviews !== null && <ul>{reviews.map(({author, content, id}) => {
            return(
                <div key={id}>

                <h3>Author: {author}</h3>
                <h3>{content}</h3> 

                </div>
                
            )
        })}</ul>}

        {isLoading && <div>Loading..</div>}
        {error && <p>{error}</p>}
        </div>
       
    )
}

export default Reviews;