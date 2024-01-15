import { Link } from 'react-router-dom';
import { waveform } from 'ldrs'

import "./ListContainer.css";

export const ListContainer = ({title, listItems, type}) => {
    waveform.register();
    return (
        <div className="list-container">
            <h2>{title}</h2>
            {
                listItems?.length === 0 && (
                    <div className='loading'>
                        <l-waveform
                        size="35"
                        stroke="3.5"
                        speed="1" 
                        color="#f3f3f3" 
                        ></l-waveform>
                    </div>
                )
            }
            <div className="scrollable-container">
                {listItems?.results?.map((item) => {
                    return (
                        <Link key={item.id} to={`/play/${type}/${item.id}`}>
                            <div className="movie-card">
                                <img
                                className="poster"
                                src={'https://image.tmdb.org/t/p/original'+item.poster_path}
                                alt={item.original_title}
                                loading="lazy"
                                />
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
