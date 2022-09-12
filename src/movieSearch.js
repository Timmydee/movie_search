import React from "react";

export default function MovieSearch(){
    const [query, setQuery] = React.useState('')
    const [movies, setMovies] = React.useState([])

    function search(e){
        e.preventDefault()
        console.log('searched')


        const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;
        
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMovies(data.results)
                console.log(data.results)
            })
             
    }

    return (
        <main className="nav">
            <div className="nav-content">
                <h1 className="find">Find your Movie</h1>
                <form onSubmit={search}>
                    <input 
                        type="text" placeholder="Input your movies here" value={query} onChange={e => setQuery(e.target.value)}
                    />
                    <button>Search</button>
                </form>
            </div>
            
            <div className="movie-list">
                {movies.map(movie => (
                    <>
                    <div className="movie-col" key={movie.id}>
                        <div className="img-col">
                            <img className="movie-img"
                                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                                alt={movie.poster_path}
                            />
                        </div>
                        <div className="movie-content">
                            <h3 className="card--title">{movie.title}</h3>
                            <p className="p"><small>RELEASE DATE: {movie.release_date}</small></p>
                            <p className="p"><small>RATING: {movie.vote_average}</small></p>
                            <p className="card--desc">{movie.overview}</p>
                            
                        </div>

                    </div>
                    <div className="line"></div>
                    </>
                ))}
            </div>
        </main>
    )
}