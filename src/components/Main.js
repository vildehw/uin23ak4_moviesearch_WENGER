import Moviecard from './Moviecard';

import { Link } from 'react-router-dom';
import Search from './Search';
export default function Main({movies, setSearch, setId, getInfo, getMovies}){
    return (
      <>
      <Search setSearch={setSearch} getMovies={getMovies} />
      <section>
        <h2>Searchresult</h2>
          {movies?.map((movie) => ( 

                //getInfo(movie.imdbID) &&

                  <Moviecard key={movie.imdbID} title={movie.Title} img={movie.Poster} year={movie.Year} actors={movie.Actors}/> 
             
          ))} 

        </section>
      </>

      );
}