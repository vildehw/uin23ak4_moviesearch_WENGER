import './App.css' 
import './css/main.css'
import { useEffect, useState } from 'react'
import Layout from './components/Layout'
import SearchResult from './components/SearchResult'

function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("james bond")  
 
  const getMovies = async() =>{
    const response = await fetch(`http://www.omdbapi.com/?apikey=3b9aa7ca&type=movie&s=${search}`)
    const data = await response.json() 
    console.log(data.Search)
    setMovies(data.Search) 
  }   


  useEffect(() =>{
    getMovies()  
  },[search])

  

  return (
   <> 
    <Layout>
      <SearchResult movies={movies} setSearch={setSearch} getMovies={getMovies} />
    </Layout>
        
        </>
  );
}

export default App;
