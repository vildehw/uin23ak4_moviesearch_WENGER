

export default function MovieCard({title, img, year, actors, imdbID}){ 
    
    return(
        <article>   

            {img === "N/A" ? <img src="./placeholder.png" alt={title} /> : <img src={img} alt={title} />}
            <h3>{title}</h3>  
            <p>publisert: {year}</p> 
            <p>actors: {actors}</p> 
            <p>{imdbID}</p>
            
        </article>
    )
} 

// placeholderbilde hentet fra: https://placehold.co/