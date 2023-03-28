import './App.css' 
import './css/main.css'
import Main from './components/Main'
import {Route, Routes} from 'react-router-dom'

import { useEffect, useState } from 'react'
import Layout from './components/Layout'

function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("bond")  
  const [moviesId, setMoviesId] = useState([])  
  const [id, setId] = useState("tt0848228")
  

  const getMovies = async() =>{
    const response = await fetch(`http://www.omdbapi.com/?apikey=3b9aa7ca&type=movie&s=${search}`)
    const data = await response.json() 
    console.log(data.Search)
    setMovies(data.Search) 

  }   


//movies?.map((movie) => {setId(movie.imdbID)})

  const getInfo = async(id) =>{
      const infoResponse = await fetch(`http://www.omdbapi.com/?apikey=3b9aa7ca&type=movie&i=${id}`)
      const infoData = await infoResponse.json() 
      console.log(infoData)
      setId(infoData)
      //setMovies(id)   
      console.log(infoData) 
  } 

  

  useEffect(() =>{
    getMovies()  
    getInfo()
  },[search])

  
 console.log(id)

  return (
   <> 
   <Layout>
        <Main movies={movies} setSearch={setSearch} setId={setId} getInfo={getInfo} getMovies={getMovies} />
  
        </Layout>
        
        </>
  );
}

export default App;
