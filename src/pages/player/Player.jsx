import { Navbar } from "../../shared/components/navbar/Navbar";
import { useParams } from 'react-router-dom';

import "./Player.css";

export const Player = () => {
    const { type, id } = useParams();

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="player">
                    <iframe
                    width="100%"
                    height="100%"
                    src={`https://vidsrc.to/embed/${type}/${id}`}
                    title="title"
                    frameBorder="0"
                    allowFullScreen
                    ></iframe>
                </div>
            </div>
        </>
    )
}

// export default Player;