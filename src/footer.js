import React from "react";
import { Link } from "react-router-dom";
import { BsInstagram,BsGithub,BsFacebook,BsTelegram } from "react-icons/bs";

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-sections">
          <div className="footer-section fs1">
            <h1>MOVIE TIME</h1>
            <hr></hr>
            <hr></hr>
            <p>
              This website gives you an ability to search and rate films. In this
              website everyone will find movies of various genres.
              Popular dramas, family and war films, favorite movies of any
              genre. Favorite actors, interesting plots and quality pictures are
              waiting for you.
            </p>
          </div>
          <div className="footer-section fs2">
            <h1>LINKS</h1>
            <hr></hr>
            <hr></hr>
            <Link to='/'>ABOUT</Link>
            <Link to='/'>TERMS</Link>
            <Link to='/'>PRIVACY POLICY</Link>
            <Link to='/'>BLOG</Link>
          </div>
          <div className="footer-section fs3">
            <h1>CONTACT</h1>
            <hr></hr>
            <hr></hr>
            <div className="fs3-links">
            <Link to={{ pathname: "https://github.com/Anarasty" }} target="_blank" ><BsGithub></BsGithub></Link>
            <Link to={{ pathname: "https://web.telegram.org" }} target="_blank" ><BsTelegram></BsTelegram></Link>
            </div>
            <div className="fs3-links">
            <Link to={{ pathname: "https://www.facebook.com" }} target="_blank" ><BsFacebook></BsFacebook></Link>
            <Link to={{ pathname: "https://www.instagram.com" }} target="_blank" ><BsInstagram></BsInstagram></Link>
            </div>
          </div>
        </div>
        <div className="copyright-section">
          <h2>© 2022 MOVIE TIME All rights reserved</h2>
        </div>
      </footer>
    </>
  );
};
