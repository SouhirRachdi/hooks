import React ,{useEffect, useState} from 'react';
import MovieCard from './MovieCard';

const MovieList = ({search,frating,addMovie}) => {
  const [movies,setMovies] = useState([
    { 
    Title:'Peaky Blinders',
    description:'Peaky Blinders is a British television series created by Steven Knight',
    posterURL:'https://i.pinimg.com/originals/10/d4/f7/10d4f7c11d90cbed7bac9c7c5f1e03b1.jpg',
    rating:100
    } ,
    {
        Title:'Harry Potter',
        description:' film series is an American-British fantasy series produced by Warner Bros.',
        posterURL:'https://fr.web.img2.acsta.net/pictures/18/07/02/17/25/3643090.jpg',
        rating:80
    } ,
    {
        Title:'Spider-Man',
        description:' Spider-man is an American film directed by Jon Watts, released in 2021.',
        posterURL:'https://fr.web.img4.acsta.net/pictures/21/11/16/10/01/4860598.jpg',
        rating:50    
    },
    {
      Title:'Malcolm & Marie',
      description:'is a film directed by Sam Levinson starring John David Washington,Zendaya.',
      posterURL:'https://imgsrc.cineserie.com/2020/11/1728134.jpg?ver=1',
      rating:40   
    },
    {
      Title:'Bliss',
      description:'Bliss is a 2021 American drama film written and directed by Mike Cahill.',
      posterURL:'https://fr.web.img4.acsta.net/pictures/21/01/13/07/43/4660253.jpg',
      rating:89 
    },
    {
      Title:'Lolita',
      description:'Lolita is a Franco-American film directed by Adrian Lyne,released in 1997.',
      posterURL:'https://img2.film7.hu/original/eQUnK3828qLFwduB0skCNcB20fZ.jpg',
      rating:99 
    },
    {
      Title:'Mulan',
      description:'is the 54th animated feature film “Animated Classic” from Disney Studios.',
      posterURL:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTWyPVTOL7zYHoZFBZx0s9l8JthWA63ZzzmiukpEe0WdG8ymk8L',
      rating:80 
    },
    {
      Title:'Bridgerton',
      description:'is set in the sexy,lavish and competitive world of Regency London high society. ',
      posterURL:'https://static1.showtimes.com/poster/660x980/bridgerton-netflix-149758.jpg',
      rating:70 
    }
])

const handelDelet=(titleDelet)=>{
setMovies(movies.filter(el=>el.Title!= titleDelet))
}

useEffect(() => {
  if(addMovie)
  {setMovies([...movies,addMovie])}
}, [addMovie]);

  
  
  return(
<div style={{marginTop:'150px'}}>
    {movies.filter(movie => movie.Title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) && movie.rating >= frating).map((el,i)=> <MovieCard handelDelet={handelDelet} key={i} movie={el}/> )}
  
</div>
  ) ;
};
export default MovieList;
