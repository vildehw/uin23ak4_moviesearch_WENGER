import Moviecard from './Moviecard';
import Search from './Search';

export default function SearchResult({movies, setSearch, getDetails, getMovies}){ 

    return (
      <>
      <Search setSearch={setSearch} getMovies={getMovies} />
      <section>
        <h2>Searchresult</h2>

          {movies?.map((movie, index) => (
            <Moviecard 
              key={index}
              imdbID={movie.imdbID} 
              title={movie.Title} 
              img={movie.Poster} 
              year={movie.Year}
            />    
          ))}  

        </section>
      </>

      );
}