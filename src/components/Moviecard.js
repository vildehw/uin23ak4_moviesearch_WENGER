import { Link } from "react-router-dom";

export default function RecipeCard({title, img, year, actors}){ 
    
    return(
        <article className="recipe-card">  
            
            <img src={img} alt={title + "poster"} /> 
            <h3>{title}</h3>  
            <p>publisert: {year}</p> 
            <p>actors: {actors}</p>
            
            
        </article>
    )
}