import React from "react";
import { useGlobalContext } from "./context";

export const FilterMovies = () => {
    const {setPageNumber, setTypeOfMovie, typeOfMovie} = useGlobalContext();
    const filterStart = (filter) => {
        setPageNumber(1);
        setTypeOfMovie(filter);
    }
    return (
        <>
        <main className="sorting-options">
            <div className={`${typeOfMovie === "top_rated" ? "active":""}`}>
                <button className="btn filter-btn" onClick={() => filterStart("top_rated")}>Top Rated</button>
            </div>
            <div className={`${typeOfMovie === "popular" ? "active":""}`}>   
                <button className="btn filter-btn" onClick={() => filterStart("popular")}>Most Popular</button>
            </div>
            <div className={`${typeOfMovie === "trending" ? "active":""}`}>
                <button className="btn filter-btn" onClick={() => filterStart("trending")}>Trending</button>
            </div>
        </main>
        </>
    );
}