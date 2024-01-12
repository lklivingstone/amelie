import { useEffect } from "react";
import { Navbar } from "../../shared/components/navbar/Navbar";
import "./Home.css";

export const Home = () => {

    useEffect(() => {

    }, [])

    return (
        <div>
            <Navbar />
            <div className="home-container">
                <div className="list-container">
                    <h2>Latest Movies</h2>
                    <div className="scrollable-container">

                    </div>
                </div>
            </div>
        </div>
    )
}