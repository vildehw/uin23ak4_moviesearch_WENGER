

export default function Search({setSearch, getMovies}){ 

    const handleSubmit = (event) =>{
        event.preventDefault()
    }

    const handleSearch = (event) =>{ 
        if (event.target.value.length >= 3) {setSearch(event.target.value) }
        console.log(event.target.value)
    } 

    
    return (
        <form onSubmit={handleSubmit}>
            <input type="search" placeholder="film.." onChange={handleSearch} />
            <button type="submit" onClick={getMovies}>søk</button>
        </form>
    )
}