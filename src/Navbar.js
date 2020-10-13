import React from "react";
import "./Navbar.css";
import req from "./requests";

function Navbar({ setSelectedCategory }) {
  return (
    <div className="nav">
      <h2 onClick={() => setSelectedCategory(req.fetchTrending)}>Trending</h2>
      <h2 onClick={() => setSelectedCategory(req.fetchTopRated)}>Top Rated</h2>
      <h2 onClick={() => setSelectedCategory(req.fetchActionMovies)}>Action</h2>
      <h2 onClick={() => setSelectedCategory(req.fetchComedyMovies)}>Comedy</h2>
      <h2 onClick={() => setSelectedCategory(req.fetchHorrorMovies)}>Horror</h2>
      <h2 onClick={() => setSelectedCategory(req.fetchRomanceMovies)}>
        Romance
      </h2>
      <h2 onClick={() => setSelectedCategory(req.fetchMysteryMovies)}>
        Mystery
      </h2>
      <h2 onClick={() => setSelectedCategory(req.fetchScifiMovies)}>Sci-fi</h2>
      <h2 onClick={() => setSelectedCategory(req.fetchWesternMovies)}>
        Western
      </h2>
      <h2 onClick={() => setSelectedCategory(req.fetchAnimationMovies)}>
        Animation
      </h2>
      <h2 onClick={() => setSelectedCategory(req.fetchSeries)}>TV Series</h2>
    </div>
  );
}

export default Navbar;
