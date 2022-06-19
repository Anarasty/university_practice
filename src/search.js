import React, { useRef } from "react";
import { useGlobalContext } from "./context";
import { Link } from 'react-router-dom';
import { IMAGE_BASE_URL } from "./config";
import { FaSearch } from "react-icons/fa";

export const Search = () => {
    const searchValue = useRef("");
    const {setSearchTerm, searchResults, setSearchResults} = useGlobalContext();
    const searchFunction = () => {
        if (searchValue.current.value.length > 0) {
            setSearchTerm(searchValue.current.value);
        }
        else {
            setSearchResults([]);
        }
    }
    const resetDefault = () => {
        setSearchResults([]);
        searchValue.current.value = "";
    }
    
    return (
        <div className="search-form-div">
            <form action="" className="search-form" onSubmit={(e)=>e.preventDefault()}>
                <div className="input-box">
                    <input type="text" id="searchbox" placeholder="Search Movies" ref={searchValue} onChange={searchFunction} autoComplete="off"/>
                    <FaSearch className="search-icon" style={{fontSize: "larger"}} />
                </div>
                <div className="search-results">
                    {searchResults.map((result) => {
                        const {movieId, title, poster} = result;
                        return (
                            <article key={movieId} className="search-result-single">
                                <img src={`${IMAGE_BASE_URL}w92${poster}`} alt={title} className="link-image"/>
                                <p><Link to={`/movie/${movieId}`} className="search-result-title" onClick={resetDefault}>{title}</Link></p>
                            </article>
                        )
                    })}
                </div>
            </form>
        </div>
    );
}