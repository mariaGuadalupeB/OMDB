import * as React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import MovieSearch from "../views/movies/MovieSearch"


const HeaderContainer = () => {
    let token = localStorage.getItem("token")

    React.useEffect(() => {
        if(token) {
        axios.get("http://localhost:8080/api/favorites")
        .then(data => console.log("favoritos", data))
        }
    }, [token]);

    const logOutHandler = () => {
        token = undefined;
        localStorage.clear()
    }

    return (
        <>
            <nav className="navbar mt-3" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link to={"/main"} className="navbar-item"> 
                        <img src="https://moviedex.js.org/static/media/omdbLogo.4cb5593a.webp" width="100" height="28" />  
                    </Link> 
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start"> </div>
                    
                    <MovieSearch />
                
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                            <Link to={"/login"} onClick={logOutHandler} className="button is-primary"> 
                                    <strong> 
                                        { token ? "Log Out" : "Sign In" }
                                    </strong> 
                                </Link>

                                <Link to={"/register"} className="button is-primary"> <strong>Register</strong> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            
        </>
    )
}

export default HeaderContainer;