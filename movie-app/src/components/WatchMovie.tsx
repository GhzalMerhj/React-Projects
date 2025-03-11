import React from "react"
import { IMovie } from "../types/IMovie"
import './WatchMovie.css';

interface IWatchMovie {
   movie: IMovie,
   removeFromWatchList: (movie: IMovie) => void
}
const WatchMovie: React.FC<IWatchMovie> = ({movie , removeFromWatchList}) => {

 

    return(
     <div className="card">
            <p> {movie.title} <span>( {movie.year})</span> </p>
            
            <div className="button-container">
            <button>  {movie.status ? 'watched' : 'unwatched'}</button>

            <button onClick={() => {removeFromWatchList(movie)}}> Remove from Watch List </button>
            </div>
            
     </div>
    ) ;
};
export default WatchMovie