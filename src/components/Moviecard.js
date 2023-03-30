

export default function MovieCard({title, img, year, actors, imdbID}){ 
    
    return(
        <article key={imdbID}>   

            {img === "N/A" ? <img src="./placeholder.png" alt={title + " poster"} /> : <img src={img} alt={title} />}
            <h3>{title}</h3>  
            <p>publisert: {year}</p> 
            
        </article>
    )
} 

// placeholderbilde hentet fra: https://placehold.co/