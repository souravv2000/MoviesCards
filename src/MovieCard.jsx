import './MovieCard.css'


function Moviecard(obj){

return (
    <>
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <div className='card' id={obj.id}>
          <div className='upper_part'>
            <img src={obj.image}/>
            <div className='about'>
            <h2>{obj.name}</h2>
            <p id="year_director">{obj.year}<span>, {obj.director}</span></p>
            <p><span id="time">{obj.duration} </span><span id="genre">{obj.genres}</span></p>
            </div>
            </div>
            <div className='desc'>
                <p>{obj.description}</p>
                </div>
            <div className='icons'>
            <i class="fa-solid fa-share-nodes"></i>
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-message"></i>
          </div>
    </div>
    </>
)
}

export default Moviecard;