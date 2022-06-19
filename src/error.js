import React from "react";
import { Link } from 'react-router-dom';

export const Error = () => {
    return (
        <>
        <section>
            <div className="error-div"> 
                <h2>Oops! This page doesn't exist</h2>
                <Link to="/" className="btn">Return Home</Link>
            </div>
        </section>
        </>
    );
}