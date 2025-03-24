import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import './App.css';
import Movie from './components/Movie';
import { IMovie } from './types/IMovie';
import WatchMovie from './components/WatchMovie';
import Header from './components/Header';
import RegisterForm from './components/RegisterForm';

const movies: IMovie[] = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    description: "A thief who enters the dreams of others to steal secrets is given a task to plant an idea instead.",
    status: true
  },
  {
    id: 2,
    title: "The Matrix",
    year: 1999,
    description: "A computer hacker discovers the shocking truth about his reality and his role in the war against its controllers.",
    status: true
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    status: true
  },
  {
    id: 4,
    title: "The Dark Knight",
    year: 2008,
    description: "Batman faces the Joker, a criminal mastermind who wants to plunge Gotham into anarchy.",
    status: true
  },
  {
    id: 5,
    title: "Avatar",
    year: 2009,
    description: "A paraplegic Marine dispatched to the moon Pandora finds himself torn between following orders and protecting his new world.",
    status: false
  },
  {
    id: 6,
    title: "Titanic",
    year: 1997,
    description: "A love story unfolds between two passengers on the ill-fated Titanic ship.",
    status: false
  },
  {
    id: 7,
    title: "The Shawshank Redemption",
    year: 1994,
    description: "A banker is sentenced to life in Shawshank prison and forms a friendship that gives him hope.",
    status: true
  },
  {
    id: 8,
    title: "Pulp Fiction",
    year: 1994,
    description: "The lives of two mob hitmen, a boxer, a gangster's wife, and others intertwine in tales of violence and redemption.",
    status: true
  },
  {
    id: 9,
    title: "Forrest Gump",
    year: 1994,
    description: "A man with a low IQ recounts his extraordinary life story, touching key historical moments.",
    status: true
  },
  {
    id: 10,
    title: "The Lord of the Rings: The Return of the King",
    year: 2003,
    description: "The final battle for Middle-earth begins as Frodo and Sam approach Mount Doom.",
    status: true
  }
];



const App: React.FC = () => {
  const [watchlist, setWatchlist] = useState<IMovie[]>([]);
  

  const addToWatchList = (movie: IMovie) => {
     if(!watchlist.some( (m)=> m.id === movie.id) ){
      setWatchlist([...watchlist,movie]);
     }
  }
  const removeFromWatchList = (movie: IMovie) => {
      const updatedWatchList = watchlist.filter( (item) => item.id !== movie.id) ;
       setWatchlist(updatedWatchList);
  }
  
  return (
    <Router>
    <div className="container">
         <Header />
    </div>
    <div className="container">
      <h2> Movies  </h2>
      <div className="movie-list">
      { movies.map( (movie) =>{

       return  <Movie movie={movie} key={movie.id} addToWatchList={addToWatchList} /> 
      })
       }
      </div>
      
    </div>
    <div className="container">
     <h2> Watch List </h2>
     {
        <div className="movie-list">
      { 
       watchlist.map( (movie) =>{

       return  <WatchMovie movie={movie} key={movie.id} removeFromWatchList={removeFromWatchList}/> 
      })
       }
      </div>
     }
    </div>
    
    <Routes>
      <Route path='/'  />
      <Route path='register'  element={<RegisterForm />} />
    </Routes>
    </Router>
  );
};

export default App;
