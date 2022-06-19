import React, { useState, useEffect }  from "react";
import { useGlobalContext } from "./context";
import { Loading } from './loading';
import { Link } from 'react-router-dom';
import { Error } from "./error";
import { IMAGE_BASE_URL } from "./config";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { IoMdArrowDropup } from "react-icons/io";

export const MovieList = () => {
    const [loading, setLoading] = useState(false);
    const [movieList, setMovieList] = useState([]);
    const { url, typeOfMovie, pageNumber, togglePage, returnToTop } =  useGlobalContext();

    useEffect(() => {
        setLoading(true);
        async function fetchMovies() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                if (response.status !== 404) {
                    let newMovieList = [];
                    for (let i = 0; i < data.results.length; i++) {
                        const newMovie = {
                            movieId:data.results[i].id, 
                            title:data.results[i].title, 
                            poster:data.results[i].poster_path, 
                            release_date:data.results[i].release_date, 
                            popularity:data.results[i].popularity, 
                            rating:data.results[i].vote_average
                        };
                        newMovieList = [...newMovieList, newMovie];
                    }
                    setMovieList(newMovieList);
                    setLoading(false);
                }
                else {
                    setLoading(false);
                    return <Error />
                }
            }
            catch (error) {
                setLoading(false);
            }
        }
        fetchMovies();
    }, [url])
    
    if (loading) {
        return <Loading />
    }

    return (
        <main>
            <section className="movie-list-section">
                {movieList.map((movie) => {
                    const {movieId, title, poster, release_date, popularity, rating} = movie;
                    return (
                        <article className="movie" key={movieId}>
                            <div className="movie-sub-div ">
                                <header>
                                    <Link to={`/movie/${movieId}`}><img src={`${IMAGE_BASE_URL}w154${poster}`} alt={title}/></Link>
                                    <h5><Link to={`/movie/${movieId}`}>{title}</Link></h5>
                                    <span className="movie-info ">
                                        <p><b>Released:</b> <i>{release_date}</i></p>
                                        <p><b>Popularity:</b> <i>{popularity}</i></p>
                                        <p><b>Rating:</b> <i>{rating}</i></p>
                                    </span>
                                </header>
                            </div>
                            {/* <span className="movie-info shadow">
                                <p>Released {release_date}</p>
                                <p>Popularity: {popularity}</p>
                                <p>Rating: {rating}</p>
                            </span> */}
                        </article>
                    );
                })}
            </section>
            {window.innerWidth > 500 || <button className="btn top-btn" onClick={returnToTop}><IoMdArrowDropup /></button>}
            {typeOfMovie === "trending" || 
                <div className="page-selector">
                    {pageNumber === 1 || <button type="button" className="page-btn" style={{fontSize:"larger"}} onClick={() => togglePage("back")}><FaAngleLeft/></button>}
                    <h5>{pageNumber}</h5>
                    <button type="button" className="page-btn" style={{fontSize:"larger"}} onClick={() => togglePage("next")}><FaAngleRight/></button>
                </div>
            }
        </main>
    );
}