import React,{useState} from 'react';
import './App.css';
import Add from './components/Add';
import Filter from './components/Filter';
import MovieList from './components/MovieList';



function App() {
  const [frating, setFrating] = useState(0);
  const handelRating=(z)=>{
    setFrating(z)
  }
  
  const [search, setSearch] = useState("");
  const handelFilter=(searchValue)=> {
    setSearch(searchValue);
  }
  
  const [addMovie, setAddMovie] = useState("");
 const handelAdd=(x) => {
   setAddMovie(x)
   
 }



 

  return (
    <div className="App">
    
     <Filter  handelRating={handelRating} handelFilter={handelFilter}/>
     
     <MovieList  frating={frating}  addMovie={addMovie} search={search}/>
     <Add  handelAdd={handelAdd}/>
    </div>
  );
  
}
export default App;
