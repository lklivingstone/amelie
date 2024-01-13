import { Link } from 'react-router-dom';

import "./ListContainer.css";

export const ListContainer = ({title, listItems}) => {
    return (
        <div className="list-container">
            <h2>{title}</h2>
            <div className="scrollable-container">
                {listItems?.results?.map((item) => {
                    return (
                        <Link to={`/play/movie/${item.id}`}>
                            <div key={item.id} className="movie-card">
                                <img className="poster" src={'https://image.tmdb.org/t/p/original'+item.poster_path} alt={item.original_title} />
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}