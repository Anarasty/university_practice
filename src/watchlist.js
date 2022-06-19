import React from "react";
import { useGlobalContext } from "./context";
import { Link } from 'react-router-dom';


export const Watchlist = () => {
    const {watchlist, movieRatings, toggleWatchlist} = useGlobalContext();
    
    if (watchlist.length === 0) {
        return (
            <main className="watchlist">
                <h2>Your favorite list is empty</h2>
                <h5>Try to add movies first</h5>
            </main>
        )
    }
    let data = [];
    
    for (let i = 0; i < watchlist.length; i++) {
        const rated = movieRatings.find((movie) => watchlist[i].id === parseInt(movie.id));
        const newEntry = {
            id:watchlist[i].id,
            title:watchlist[i].title, 
            release_date:watchlist[i].release_date, 
            rating:watchlist[i].rating,
            user_rating: rated ? `${rated.score}`:"N/A",
            remove_button: "true"
        };
        data = [...data, newEntry];
    }

    return (
        <main className="watchlist">
            <h2>Your favorite list</h2>
            <div className="table-container">
                <table>
                    <tbody className="movie-section">
                    <tr>
                        <th>Name</th>
                        {/* <th>RELEASED</th> */}
                        <th>Global rating</th>
                        <th>My rating</th>
                        <th>Delete</th>
                    </tr>
                    {data.map((movie) => {
                        const {id, title, release_date, rating, user_rating} = movie;
                        return (
                            <tr className="movie-element" key={id}>
                                <td><Link to={`/movie/${id}`} className='movie-fav-title'>{title}</Link></td>
                                {/* <td>{release_date}</td> */}
                                <td>{rating}</td>
                                <td>{user_rating}</td>
                                <td><button className="btn" type="button" onClick={()=>toggleWatchlist(id, title, release_date, rating)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg></button></td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </main>
    );
}