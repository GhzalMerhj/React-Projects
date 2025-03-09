import React from "react";
import { IMovie } from "../types/IMovie";
interface IMovieProps {
    movie: IMovie
}

const Movie: React.FC<IMovieProps> = ({movie}) => {


    return (
     <div className="card">
     <span> title {movie.title}</span>
     <span>( year ) { movie.year}</span>
     <span> status {movie.status ? 'watched' : 'unwatched'}</span>
     <button> Add To Watch List </button>
     </div>

    )
}
export default Movie;
