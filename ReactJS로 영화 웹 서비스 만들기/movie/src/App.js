import { useEffect, useState } from "react";

function App(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")
            .then(response => response.json())
            .then((json) => {
                setLoading(false);
                setMovies(json.data.movies);
            })
    }, [])

    return(
        <div>
            <h1>Movies 보여줄랭</h1>
            <ul>
            {
                movies.map((movie, index) =>
                    (
                        <div>
                            <li key={movies.index}>
                                {movie.title}
                            </li>
                            <img src={movie.medium_cover_image} />
                        </div>
                    )
                )
            }
            </ul>
        </div>
    )
}

export default App;