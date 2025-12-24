import MovieCard from "../components/MovieCard";
import { useState } from "react";
import '../css/Home.css'


function Home() {
    const [searchQuery,setSearchQuery] = useState("")

    const movies = [
        {id:1 , title:"Ram Hari" , release_date : "2024"},
        {id:2 , title:"RThe Matrix" , release_date : "2024"},
        {id:3 , title:"Shyam" , release_date : "2024"},
        {id:4 , title:"Ram Hari" , release_date : "2024"}
    ]

    const HandleSearch = (e)=> {
         e.preventDefault();
        alert(searchQuery)
    }

    return <div className="home">
        <form onSubmit={HandleSearch} className="search-form">
            <input 
            type="text" 
            placeholder="Search For Movies..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />

            <button type="submit" 
            className="search-button">Search</button>
        </form>
        <div className="movies-grid">
            {movies.map(movie => 
           movie.title.toLowerCase().startsWith(searchQuery) && (<MovieCard movie={movie} key={movie.id}/>
            ))}
        </div>
    </div>
}

export default Home;