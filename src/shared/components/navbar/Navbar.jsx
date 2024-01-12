import "./Navbar.css";

export const Navbar = () => {

    return (
        <div className="navbar-wrapper">
            <div className="links-wrapper">
                <h1 className="logo">amelie</h1>
                <div className="links-list">
                    <a href="/home">Home</a>
                    <a href="/movies">Movies</a>
                    <a href="/tvshows">TV Shows</a>
                </div>
            </div>
            <div className="search-wrapper">
                <input type="text" placeholder="Search" />
            </div>
        </div>
    )
}