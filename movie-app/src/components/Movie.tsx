import React, { useState } from "react";
import { IMovie } from "../types/IMovie";
import './Movie.css';
interface IMovieProps {
    movie: IMovie,
    addToWatchList: (movie: IMovie) => void,
}

const Movie: React.FC<IMovieProps> = ({movie , addToWatchList}) => {

    const [status ,setStatus ] = useState(movie.status);

   const toggleStatus = ()=>{
         setStatus((prevStatus) => !prevStatus);
         }

    return (
     <div className="card">
     <p>  {movie.title} <span>(  { movie.year} ) </span> </p>
      
      <div className="button-container">
        <button onClick={() => toggleStatus()}  className={ status ? 'watched' : 'unwatched' } >  {status ? 'watched' : 'unwatched'} </button>

        <button onClick={() => addToWatchList(movie)}> Add To Watch List </button>
      </div>
     
     </div>

    )
}
export default Movie;
