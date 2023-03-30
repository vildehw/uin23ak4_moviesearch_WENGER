import './App.css' 
import './css/main.css'
import Main from './components/Main'
import { useEffect, useState } from 'react'
import Layout from './components/Layout'

function App() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("bond")  
 
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
      <Main movies={movies} setSearch={setSearch} getMovies={getMovies} />
    </Layout>
        
        </>
  );
}

export default App;
