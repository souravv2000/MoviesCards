import './MovieCards.css'
import Moviecard from './MovieCard'
import moviesData from './Movies.json'

function MovieCards(){
    return(
        <>
        <div className='MoviesContainer'>
            {moviesData.map((movie)=>(
                <Moviecard key={movie.id} 
                id={movie.id}
                image={movie.imageUrl} 
                name={movie.name} 
                year={movie.releaseYear} 
                director={movie.director} 
                duration={movie.duration}
                 genres={movie.genres} 
                 description={movie.description}/>
            ))}
        </div>
        </>
    )
}
export default MovieCards;
