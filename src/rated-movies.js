import React from "react";
import { useGlobalContext } from "./context";
import { Link } from 'react-router-dom';

export const RatedMovies = () => {
    const {movieRatings} = useGlobalContext();

    if (movieRatings.length === 0) {
        return (
            <main className="movie-ratings">
                <h2>No ratings...</h2>
                <h5>Try to add ratings first</h5>
            </main>
        )
    }

    return (
        <main className="movie-ratings">
            <h2>Your ratings</h2>
            <div className="table-container">
                <table>
                    <tbody  className="movie-section">
                    <tr>
                        <th>Name</th>
                        {/* <th>RELEASED</th> */}
                        <th>Global rating</th>
                        <th>My rating</th>
                    </tr>
                    {movieRatings.map((movie) => {
                        const {id, title, release_date, rating, score} = movie;
                        return (
                            <tr className="movie-element" key={id}>
                                <td><Link to={`/movie/${id}`} className='movie-rate-title'>{title}</Link></td>
                                {/* <td>{release_date}</td> */}
                                <td>{rating}</td>
                                <td>{score}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </main>
    )
}