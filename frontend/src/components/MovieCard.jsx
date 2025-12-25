function MovieCard({ movie }) {

    function onFavouriteClick(e) {
        e.stopPropagation();
        alert(`${movie.title} added to favourites`);
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    loading="lazy"
                />

                <button
                    className="favorite-btn"
                    onClick={onFavouriteClick}
                    aria-label="Add to favourites"
                >
                    ❤️
                </button>

                <div className="movie-overlay" />
            </div>

            <div className="movie-info">
                <h3 title={movie.title}>{movie.title}</h3>
                <span className="movie-year">
                    {movie.release_date?.split("-")[0] || "N/A"}
                </span>
            </div>
        </div>
    );
}

export default MovieCard;
