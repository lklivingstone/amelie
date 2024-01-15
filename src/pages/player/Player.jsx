import { useParams } from 'react-router-dom';
import { useState } from "react";

import { Navbar } from "../../shared/components/navbar/Navbar";

import "./Player.css";

export const Player = () => {
    const { type, id } = useParams();
    const [toggle, setToggle] = useState(false);  

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
            <button style={{padding: "20px", margin: "2.5vw"}} onClick={(e) => setToggle(!toggle)}>{toggle ? 'true' : 'false'}</button>
            {
              toggle && (
                
            <div className="container">
                <div className="player">
                    <iframe
                    width="100%"
                    height="100%"
                    src={`https://vidsrc.xyz/embed/${type}/${id}`}
                    title="title"
                    frameBorder="0"
                    allowFullScreen
                    ></iframe>
                </div>
            </div>
              )
            }
        </>
    )
}

// export default Player;
