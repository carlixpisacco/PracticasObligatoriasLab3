import PropTypes from "prop-types"

const ReturnNameFilm = ({watchList}) => {

    const nolanFilms = watchList
    .filter(pelicula => pelicula.Director === 'Christopher Nolan' && pelicula.imdbRating > 8.0)

    return(
        <div>
            <h1> Películas dirigidas por Cristopher Nolan con imdb Rating {">"} 8 </h1>
            {nolanFilms.map((pelicula, i) => 
                <h2 key = {i}> 
                    Título: {pelicula.Title} 
                </h2>
            )}
        </div>
    )
};

ReturnNameFilm.propTypes = {
 watchList: PropTypes.array
}

export default ReturnNameFilm;